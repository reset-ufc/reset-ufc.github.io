import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MembersManager from '../../components/admin/MembersManager';
import ProjectsManager from '../../components/admin/ProjectsManager';
import NewsManager from '../../components/admin/NewsManager';
import PublicationsManager from '../../components/admin/PublicationsManager';

type Tab = 'members' | 'projects' | 'news' | 'publications';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('members');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  const tabs = [
    { id: 'members', label: 'Membros' },
    { id: 'projects', label: 'Projetos' },
    { id: 'news', label: 'Notícias' },
    { id: 'publications', label: 'Publicações' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'members':
        return <MembersManager />;
      case 'projects':
        return <ProjectsManager />;
      case 'news':
        return <NewsManager />;
      case 'publications':
        return <PublicationsManager />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Painel Administrativo</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${
                      activeTab === tab.id
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
} 