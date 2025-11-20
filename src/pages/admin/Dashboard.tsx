import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MembersManager from '../../components/admin/MembersManager';
import ProjectsManager from '../../components/admin/ProjectsManager';
import NewsManager from '../../components/admin/NewsManager';
import PublicationsManager from '../../components/admin/PublicationsManager';
import { useAuthContext } from '../../contexts/AuthContext';

type Tab = 'members' | 'projects' | 'news' | 'publications';

export default function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthContext();
  const [activeTab, setActiveTab] = useState<Tab>('members');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
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
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Sair
            </button>
          </div>

          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
} 