import { useState, useEffect } from 'react';
import axios from 'axios';

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  abstract: string;
}

export default function PublicationsManager() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPublication, setNewPublication] = useState({
    title: '',
    authors: '',
    journal: '',
    year: '',
    doi: '',
    abstract: '',
  });
  const [editingPublication, setEditingPublication] = useState<Publication | null>(null);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/publications');
      setPublications(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Erro ao carregar publicações:', error);
      setPublications([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (editingPublication) {
        await axios.put(`http://localhost:3000/publications/${editingPublication.id}`, newPublication);
      } else {
        await axios.post('http://localhost:3000/publications', newPublication);
      }
      await fetchPublications();
      setNewPublication({
        title: '',
        authors: '',
        journal: '',
        year: '',
        doi: '',
        abstract: '',
      });
      setEditingPublication(null);
    } catch (error) {
      console.error('Erro ao salvar publicação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (publication: Publication) => {
    setEditingPublication(publication);
    setNewPublication({
      title: publication.title,
      authors: publication.authors,
      journal: publication.journal,
      year: publication.year,
      doi: publication.doi,
      abstract: publication.abstract,
    });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta publicação?')) {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:3000/publications/${id}`);
        await fetchPublications();
      } catch (error) {
        console.error('Erro ao excluir publicação:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Gerenciar Publicações</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          {editingPublication ? 'Editar Publicação' : 'Adicionar Nova Publicação'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              value={newPublication.title}
              onChange={(e) => setNewPublication({ ...newPublication, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Autores</label>
            <input
              type="text"
              value={newPublication.authors}
              onChange={(e) => setNewPublication({ ...newPublication, authors: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Revista</label>
            <input
              type="text"
              value={newPublication.journal}
              onChange={(e) => setNewPublication({ ...newPublication, journal: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ano</label>
            <input
              type="text"
              value={newPublication.year}
              onChange={(e) => setNewPublication({ ...newPublication, year: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">DOI</label>
            <input
              type="text"
              value={newPublication.doi}
              onChange={(e) => setNewPublication({ ...newPublication, doi: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Resumo</label>
            <textarea
              value={newPublication.abstract}
              onChange={(e) => setNewPublication({ ...newPublication, abstract: e.target.value })}
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
            {editingPublication ? 'Atualizar' : 'Adicionar'}
          </button>
          {editingPublication && (
            <button
              type="button"
              onClick={() => {
                setEditingPublication(null);
                setNewPublication({
                  title: '',
                  authors: '',
                  journal: '',
                  year: '',
                  doi: '',
                  abstract: '',
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
                Título
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Autores
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revista/Ano
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {publications.map((publication) => (
              <tr key={publication.id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{publication.title}</div>
                  <div className="text-sm text-gray-500 line-clamp-2">{publication.abstract}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{publication.authors}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{publication.journal}</div>
                  <div className="text-sm text-gray-500">{publication.year}</div>
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-900 text-sm"
                  >
                    DOI: {publication.doi}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(publication)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(publication.id)}
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