import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../contexts/AuthContext';
import FormInput from '../ui/formInput';
import FormTextArea from '../ui/formTextArea';
import TagList from '../ui/tagList';
import FormSelect from '../ui/formSelect';

interface Member {
  id: string;
  name: string;
  lastName?: string;
  role: string;
  github: string;
  email: string;
  img: string;
  imgurDeleteHash?: string;
  description: string;
  contact: {
    email?: string;
    github?: string;
    latter?: string;
  };
  researchKeywords: string[];
  publishedPapers: string[];
  projectIds: string[];
  memberType?: 'PROFESSOR' | 'STUDENT' | 'COLLABORATOR';
  isCoordinator?: boolean;
  isViceCoordinator?: boolean;
  coordinatorType?: 'NONE' | 'COORDINATOR' | 'VICE_COORDINATOR';
}

const ROLE_OPTIONS = [
  { value: 'graduando', label: 'Graduando' },
  { value: 'graduado', label: 'Graduado' },
  { value: 'mestrando', label: 'Mestrando' },
  { value: 'mestre', label: 'Mestre' },
  { value: 'doutorando', label: 'Doutorando' },
  { value: 'doutor', label: 'Doutor' },
  { value: 'alumni', label: 'Alumni' },
  { value: 'professor', label: 'Professor' },
];

const MEMBER_TYPE_OPTIONS = [
  { value: 'PROFESSOR', label: 'Professor' },
  { value: 'STUDENT', label: 'Aluno' },
  { value: 'COLLABORATOR', label: 'Colaborador' },
];

export default function MembersManager() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [memberTypeFilter, setMemberTypeFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);
  const [newMember, setNewMember] = useState({
    name: '',
    lastName: '',
    role: '',
    github: '',
    email: '',
    image: null as File | null,
    description: '',
    contact: {
      latter: '',
    },
    researchKeywords: [] as string[],
    publishedPapers: [] as string[],
    projectIds: [] as string[],
    memberType: 'STUDENT' as 'PROFESSOR' | 'STUDENT' | 'COLLABORATOR',
    coordinatorType: 'none' as 'none' | 'coordinator' | 'vice-coordinator',
  });
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const { token } = useAuthContext();

  // Buscar membros da API com paginação e filtros
  const fetchMembers = async (page = 1) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });

      if (searchTerm) params.append('search', searchTerm);
      if (memberTypeFilter !== 'all') params.append('memberType', memberTypeFilter);

      const response = await axios.get(`http://localhost:3000/members?${params}`);
      if (response.data.data) {
        setMembers(response.data.data);
        setTotalPages(response.data.totalPages);
      } else {
        setMembers(Array.isArray(response.data) ? response.data : []);
        setTotalPages(1);
      }
    } catch (error) {
      console.error('Erro ao carregar membros:', error);
      setMembers([]);
      setTotalPages(1);
    } finally {
      setIsLoading(false);
    }
  };

  // Buscar membros quando filtros mudarem
  useEffect(() => {
    setCurrentPage(1);
    fetchMembers(1);
  }, [searchTerm, memberTypeFilter]);

  // Buscar membros quando página mudar
  useEffect(() => {
    fetchMembers(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewMember({ ...newMember, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', newMember.name);
      if (newMember.lastName) formData.append('lastName', newMember.lastName);
      formData.append('role', newMember.role);
      formData.append('github', newMember.github);
      formData.append('email', newMember.email);
      formData.append('description', newMember.description);
      formData.append('contact', JSON.stringify({
        email: newMember.email,
        github: newMember.github,
        latter: newMember.contact.latter || '',
      }));
      formData.append('researchKeywords', JSON.stringify(newMember.researchKeywords));
      formData.append('publishedPapers', JSON.stringify(newMember.publishedPapers));
      formData.append('projectIds', JSON.stringify(newMember.projectIds));
      formData.append('memberType', newMember.memberType);
      formData.append('coordinatorType', newMember.coordinatorType.toUpperCase());
      if (newMember.image) {
        formData.append('image', newMember.image);
      }

      if (editingMember) {
        await axios.put(`http://localhost:3000/members/${editingMember.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        });
      } else {
        await axios.post('http://localhost:3000/members', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        });
      }
      await fetchMembers();
      setNewMember({
        name: '',
        lastName: '',
        role: '',
        github: '',
        email: '',
        image: null,
        description: '',
        contact: {
          latter: '',
        },
        researchKeywords: [],
        publishedPapers: [],
        projectIds: [],
        memberType: 'STUDENT',
        coordinatorType: 'none',
      });
      setEditingMember(null);
    } catch (error) {
      console.error('Erro ao salvar membro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (member: Member) => {
    setEditingMember(member);
    setNewMember({
      name: member.name,
      lastName: member.lastName || '',
      role: member.role,
      github: member.contact.github || member.github,
      email: member.contact.email || member.email,
      image: null,
      description: member.description,
      contact: {
        latter: member.contact.latter || '',
      },
      researchKeywords: member.researchKeywords,
      publishedPapers: member.publishedPapers,
      projectIds: member.projectIds,
      memberType: member.memberType || 'STUDENT',
      coordinatorType: convertBackendCoordinatorType(member),
    });
  };

  // Função auxiliar para converter o coordinatorType do backend
  const convertBackendCoordinatorType = (member: Member): 'none' | 'coordinator' | 'vice-coordinator' => {
    // Se o backend já tem o novo campo coordinatorType
    if ('coordinatorType' in member && member.coordinatorType) {
      switch (member.coordinatorType) {
        case 'COORDINATOR':
          return 'coordinator';
        case 'VICE_COORDINATOR':
          return 'vice-coordinator';
        default:
          return 'none';
      }
    }
    
    // Fallback para campos antigos
    if (member.isCoordinator) {
      return 'coordinator';
    }
    if (member.isViceCoordinator) {
      return 'vice-coordinator';
    }
    
    return 'none';
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este membro?')) {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:3000/members/${id}`);
        await fetchMembers();
      } catch (error) {
        console.error('Erro ao excluir membro:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Gerenciar Membros</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          {editingMember ? 'Editar Membro' : 'Adicionar Novo Membro'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Nome"
            value={newMember.name}
            onChange={(value) => setNewMember({ ...newMember, name: value })}
            required
          />
          <FormInput
            label="Sobrenome"
            value={newMember.lastName}
            onChange={(value) => setNewMember({ ...newMember, lastName: value })}
          />
          <FormSelect
            label="Cargo"
            value={newMember.role}
            onChange={(value) => setNewMember({ ...newMember, role: value })}
            options={ROLE_OPTIONS}
            required
          />
          <FormSelect
            label="Tipo de Membro"
            value={newMember.memberType}
            onChange={(value) => setNewMember({ ...newMember, memberType: value as 'PROFESSOR' | 'STUDENT' | 'COLLABORATOR' })}
            options={MEMBER_TYPE_OPTIONS}
            required
          />
          
          {/* Seção de Liderança */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-md font-semibold text-gray-800 mb-3">
                Posições de Liderança
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center p-3 bg-white rounded-md border border-gray-200">
                  <input
                    type="radio"
                    id="none"
                    name="coordinator"
                    value="none"
                    checked={newMember.coordinatorType === 'none'}
                    onChange={(e) => setNewMember({ ...newMember, coordinatorType: e.target.value as 'none' | 'coordinator' | 'vice-coordinator' })}
                    className="h-4 w-4 checked:bg-indigo-600 border-gray-300 rounded"
                  />
                  <label htmlFor="none" className="ml-3 block text-sm font-medium text-gray-700">
                    <span className="block">Nenhum</span>
                    <span className="text-xs text-gray-500">Sem posição de liderança</span>
                  </label>
                </div>
                
                <div className="flex items-center p-3 bg-white rounded-md border border-gray-200">
                  <input
                    type="radio"
                    id="coordinator"
                    name="coordinator"
                    value="coordinator"
                    checked={newMember.coordinatorType === 'coordinator'}
                    onChange={(e) => setNewMember({ ...newMember, coordinatorType: e.target.value as 'none' | 'coordinator' | 'vice-coordinator' })}
                    className="h-4 w-4 checked:bg-indigo-600 border-gray-300 rounded"
                  />
                  <label htmlFor="coordinator" className="ml-3 block text-sm font-medium text-gray-700">
                    <span className="block">Coordenador</span>
                    <span className="text-xs text-gray-500">Coordenador do laboratório</span>
                  </label>
                </div>
                
                <div className="flex items-center p-3 bg-white rounded-md border border-gray-200">
                  <input
                    type="radio"
                    id="vice-coordinator"
                    name="coordinator"
                    value="vice-coordinator"
                    checked={newMember.coordinatorType === 'vice-coordinator'}
                    onChange={(e) => setNewMember({ ...newMember, coordinatorType: e.target.value as 'none' | 'coordinator' | 'vice-coordinator' })}
                    className="h-4 w-4 checked:bg-indigo-600 border-gray-300 rounded"
                  />
                  <label htmlFor="vice-coordinator" className="ml-3 block text-sm font-medium text-gray-700">
                    <span className="block">Vice-Coordenador</span>
                    <span className="text-xs text-gray-500">Vice-coordenador do laboratório</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <FormInput
            label="GitHub"
            value={newMember.github}
            onChange={(value) => setNewMember({ ...newMember, github: value })}
            required
          />
          <FormInput
            label="Email"
            type="email"
            value={newMember.email}
            onChange={(value) => setNewMember({ ...newMember, email: value })}
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Foto</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
            {newMember.image && (
              <p className="mt-1 text-sm text-gray-500">
                Arquivo selecionado: {newMember.image.name}
              </p>
            )}
          </div>
          
          <FormTextArea
            label="Descrição"
            value={newMember.description}
            onChange={(value) => setNewMember({ ...newMember, description: value })}
            required
          />
          
          <FormInput
            label="Lattes"
            value={newMember.contact.latter}
            onChange={(value) => setNewMember({ 
              ...newMember, 
              contact: { ...newMember.contact, latter: value }
            })}
            placeholder="URL do Lattes"
          />

          <TagList
            title="Palavras-chave de Pesquisa"
            items={newMember.researchKeywords}
            onAdd={(keyword) => setNewMember({
              ...newMember,
              researchKeywords: [...newMember.researchKeywords, keyword]
            })}
            onRemove={(index) => setNewMember({
              ...newMember,
              researchKeywords: newMember.researchKeywords.filter((_, i) => i !== index)
            })}
            placeholder="Adicionar palavra-chave"
          />

          <TagList
            title="Artigos Publicados"
            items={newMember.publishedPapers}
            onAdd={(paper) => setNewMember({
              ...newMember,
              publishedPapers: [...newMember.publishedPapers, paper]
            })}
            onRemove={(index) => setNewMember({
              ...newMember,
              publishedPapers: newMember.publishedPapers.filter((_, i) => i !== index)
            })}
            placeholder="Adicionar artigo"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {editingMember ? 'Atualizar' : 'Adicionar'}
          </button>
          {editingMember && (
            <button
              type="button"
              onClick={() => {
                setEditingMember(null);
                setNewMember({
                  name: '',
                  lastName: '',
                  role: '',
                  github: '',
                  email: '',
                  image: null,
                  description: '',
                  contact: {
                    latter: '',
                  },
                  researchKeywords: [],
                  publishedPapers: [],
                  projectIds: [],
                  memberType: 'STUDENT',
                  coordinatorType: 'none',
                });
              }}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Filtros e Pesquisa */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Pesquisar membros"
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Digite nome, email ou cargo..."
          />
          <FormSelect
            label="Filtrar por tipo"
            value={memberTypeFilter}
            onChange={setMemberTypeFilter}
            options={[
              { value: 'all', label: 'Todos os tipos' },
              ...MEMBER_TYPE_OPTIONS
            ]}
          />
        </div>
      </div>

      {/* Tabela de Membros */}
      <div className={`bg-white shadow rounded-lg transition-all duration-300 ${isLoading ? 'opacity-50 blur-sm' : ''}`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cargo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                GitHub
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {members.map((member) => (
              <tr key={member.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={member.img || 'https://i.imgur.com/placeholder.jpg'}
                        alt={member.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://i.imgur.com/placeholder.jpg';
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{member.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    member.memberType === 'PROFESSOR' 
                      ? 'bg-blue-100 text-blue-800'
                      : member.memberType === 'STUDENT'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {member.memberType?.toLowerCase() === 'professor' ? 'Professor' : 
                     member.memberType?.toLowerCase() === 'student' ? 'Aluno' : 'Colaborador'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{member.github}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{member.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(member)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center py-4 space-x-4 border-t border-gray-200">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-white rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 opacity-50 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              Anterior
            </button>
            <span className="text-gray-700">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-white rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 opacity-50 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 