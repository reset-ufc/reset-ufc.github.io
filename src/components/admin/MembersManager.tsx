import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../contexts/AuthContext';

interface Member {
  id: string;
  name: string;
  role: string;
  email: string;
  image: string;
  bio: string;
}

export default function MembersManager() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    email: '',
    image: null as File | null,
    bio: '',
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
      formData.append('email', newMember.email);
      formData.append('bio', newMember.bio);
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
        email: '',
        image: null,
        bio: '',
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
      email: member.email,
      image: null,
      bio: member.bio,
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cargo</label>
            <input
              type="text"
              value={newMember.role}
              onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
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
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Biografia</label>
            <textarea
              value={newMember.bio}
              onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows={4}
              required
            />
          </div>
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
                setNewMember({ name: '', role: '', email: '', image: null, bio: '' });
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
                        className="h-10 w-10 rounded-full"
                        src={member.image}
                        alt={member.name}
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