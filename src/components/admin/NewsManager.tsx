import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../contexts/AuthContext';
import FormInput from '../ui/formInput';
import FormTextArea from '../ui/formTextArea';

interface News {
  id: string;
  title: string;
  content: string;
  img: string;
  date: string;
  author: string;
}

export default function NewsManager() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newNews, setNewNews] = useState({
    title: '',
    content: '',
    image: null as File | null,
    author: '',
  });
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const { token } = useAuthContext();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/news');
      setNews(response.data.data);
    } catch (error) {
      console.error('Erro ao carregar notícias:', error);
      setNews([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewNews({ ...newNews, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', newNews.title);
      formData.append('content', newNews.content);
      formData.append('author', newNews.author);
      formData.append('date', new Date().toISOString());
      if (newNews.image) {
        formData.append('image', newNews.image);
      }

      if (editingNews) {
        await axios.put(`http://localhost:3000/news/${editingNews.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        });
      } else {
        await axios.post('http://localhost:3000/news', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        });
      }
      await fetchNews();
      setNewNews({ title: '', content: '', image: null, author: '' });
      setEditingNews(null);
    } catch (error) {
      console.error('Erro ao salvar notícia:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (newsItem: News) => {
    setEditingNews(newsItem);
    setNewNews({
      title: newsItem.title,
      content: newsItem.content,
      image: null,
      author: newsItem.author,
    });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta notícia?')) {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:3000/news/${id}`);
        await fetchNews();
      } catch (error) {
        console.error('Erro ao excluir notícia:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Gerenciar Notícias</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          {editingNews ? 'Editar Notícia' : 'Adicionar Nova Notícia'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <FormInput
              label="Título"
              value={newNews.title}
              onChange={(value) => setNewNews({ ...newNews, title: value })}
              required
              placeholder="Digite o título da notícia"
            />
          </div>
          <div className="md:col-span-2">
            <FormTextArea
              label="Conteúdo"
              value={newNews.content}
              onChange={(value) => setNewNews({ ...newNews, content: value })}
              required
              rows={6}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Imagem</label>
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
            {newNews.image && (
              <p className="mt-1 text-sm text-gray-500">
                Arquivo selecionado: {newNews.image.name}
              </p>
            )}
          </div>
          <div>
            <FormInput
              label="Autor"
              value={newNews.author}
              onChange={(value) => setNewNews({ ...newNews, author: value })}
              required
              placeholder="Digite o autor da notícia"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {editingNews ? 'Atualizar' : 'Adicionar'}
          </button>
          {editingNews && (
            <button
              type="button"
              onClick={() => {
                setEditingNews(null);
                setNewNews({ title: '', content: '', image: null, author: '' });
              }}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className={`bg-white shadow rounded-lg transition-all duration-300 ${isLoading ? 'opacity-50 blur-sm' : ''}`}>
        <table className="min-w-full divide-y divide-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notícia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Autor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {news.map((newsItem) => (
              <tr key={newsItem.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={newsItem.img}
                        alt={newsItem.title}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{newsItem.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-2">{newsItem.content}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{newsItem.author || 'Desconhecido'}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(newsItem.date).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(newsItem)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(newsItem.id)}
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