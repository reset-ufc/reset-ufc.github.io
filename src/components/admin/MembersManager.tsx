import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../contexts/AuthContext';
import FormInput from '../ui/formInput';
import FormTextArea from '../ui/formTextArea';
import TagList from '../ui/tagList';
import FormSelect from '../ui/formSelect';
import { ContactSection } from '../ContactSection';

interface Member {
  id: string;
  name: string;
  role: string;
  github: string;
  email: string;
  img: string;
  imgurDeleteHash?: string;
  description: string;
  contact: {
    email: string;
    github: string;
    latter: string;
  };
  researchKeywords: string[];
  publishedPapers: string[];
  projectIds: string[];
}

const ROLE_OPTIONS = [
  { value: 'graduando', label: 'Graduando' },
  { value: 'graduado', label: 'Graduado' },
  { value: 'mestrando', label: 'Mestrando' },
  { value: 'mestre', label: 'Mestre' },
  { value: 'doutorando', label: 'Doutorando' },
  { value: 'doutor', label: 'Doutor' },
];

export default function MembersManager() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    github: '',
    email: '',
    image: null as File | null,
    description: '',
    contact: {
      email: '',
      github: '',
      latter: '',
    },
    researchKeywords: [] as string[],
    publishedPapers: [] as string[],
    projectIds: [] as string[],
  });
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const { token } = useAuthContext();

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/members');
      setMembers(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Erro ao carregar membros:', error);
      setMembers([]);
    } finally {
      setIsLoading(false);
    }
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
      formData.append('role', newMember.role);
      formData.append('github', newMember.github);
      formData.append('email', newMember.email);
      formData.append('description', newMember.description);
      formData.append('contact', JSON.stringify(newMember.contact));
      formData.append('researchKeywords', JSON.stringify(newMember.researchKeywords));
      formData.append('publishedPapers', JSON.stringify(newMember.publishedPapers));
      formData.append('projectIds', JSON.stringify(newMember.projectIds));
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
        role: '',
        github: '',
        email: '',
        image: null,
        description: '',
        contact: {
          email: '',
          github: '',
          latter: '',
        },
        researchKeywords: [],
        publishedPapers: [],
        projectIds: [],
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
      role: member.role,
      github: member.github,
      email: member.email,
      image: null,
      description: member.description,
      contact: {
        email: member.contact.email,
        github: member.contact.github,
        latter: member.contact.latter || '',
      },
      researchKeywords: member.researchKeywords,
      publishedPapers: member.publishedPapers,
      projectIds: member.projectIds,
    });
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
          <FormSelect
            label="Cargo"
            value={newMember.role}
            onChange={(value) => setNewMember({ ...newMember, role: value })}
            options={ROLE_OPTIONS}
            required
          />
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
          
          <ContactSection
            contact={newMember.contact}
            onChange={(contact) => setNewMember({ ...newMember, contact })}
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
                  role: '',
                  github: '',
                  email: '',
                  image: null,
                  description: '',
                  contact: {
                    email: '',
                    github: '',
                    latter: '',
                  },
                  researchKeywords: [],
                  publishedPapers: [],
                  projectIds: [],
                });
              }}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

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
      </div>
    </div>
  );
} 