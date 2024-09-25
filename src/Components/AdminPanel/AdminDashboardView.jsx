import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import AdminDashboard from './AdminDashboard'; // Default or dashboard component
import CategoryTable from './CategoryTable';
import TrendingCourseTable from './TrendingCourseTable';
import Trainer from './Trainer';
import Certificate from './Certificate';
import Enroll from './Enroll';
import Registration from './Registration';
import ScheduleRequest from './ScheduleRequest';
import Blogs from './Blogs';
import Support from './Support';
import Course from './Course';


const AdminDashboardView = () => {
  // State to store the selected category from the sidebar
  const [selectedCategory, setSelectedCategory] = useState('Dashboard');

  // Function to handle category selection from sidebar
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to render components based on the selected category
  const renderContent = () => {
    switch (selectedCategory) {
      case 'Dashboard':
        return <AdminDashboard />;
      case 'Course Category':
        return <CategoryTable />;
      case 'Trending Courses':
        return <TrendingCourseTable/>
        case 'Trainer':
          return <Trainer/>
          case 'Certificate':
            return <Certificate/>
            case 'All Enroll':
              return <Enroll/>
              case 'Registration':
                return <Registration/>
                case 'Schedule Request':
                  return <ScheduleRequest/>
                  case 'Blog':
                    return <Blogs/>
                   case 'Support':
                    return <Support/>
                    case 'Course':
                      return <Course/>
      // Add more cases here as you add more components
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <>
      <AdminNavbar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Passing handleCategorySelect to AdminSidebar */}
        <AdminSidebar onSelectCategory={handleCategorySelect} />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          {/* Render content based on the selected category */}
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardView;
