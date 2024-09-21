import { React, useState } from 'react';
import Topbar from './Topbar';
import NavbarTop from './NavbarTop';
import './Dashboard.css';
import { FaTachometerAlt, FaBook } from 'react-icons/fa';
import UserDashboardCard from './UserDashboardCard';
import Footer from './Footer';
import StickyBar from './StickyBar';
import UserCategoryTable from './UserCategoryTable';
import UserOrders from './UserOrders';
import Certificate from './Certificate';

const UserDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Dashboard');

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const menuItems = [
    { title: 'Dashboard', icon: <FaTachometerAlt /> },
    { title: 'Enrolls', icon: <FaBook /> },
    { title: 'Orders', icon: <FaBook /> },
    { title: 'Resume', icon: <FaTachometerAlt /> },
    { title: 'Certificate', icon: <FaBook /> },
    { title: 'Videos', icon: <FaTachometerAlt /> },
    { title: 'Messages', icon: <FaBook /> },
    { title: 'Review', icon: <FaTachometerAlt /> },
    { title: 'Settings', icon: <FaBook /> },
  ];

  const handleMenuItemClick = (index, title) => {
    setActiveIndex(index);
    setSelectedCategory(title); // Set the selected category here
    toggleDropdown(index);
  };

  // Function to render the selected component
  const renderSelectedComponent = () => {
    switch (selectedCategory) {
      case 'Dashboard':
        return <UserDashboardCard />;
      case 'Orders':
        return <UserOrders />;
      case 'Certificate':
        return <Certificate />;
      case 'Enrolls':
        return <UserCategoryTable />;
      // Add other cases if needed
      default:
        return <UserDashboardCard />; // Default to Dashboard
    }
  };

  return (
    <>
      <Topbar />
      <NavbarTop />

      <div className="user-dashboard-heading">
        <h3>Welcome Hachion</h3>
      </div>
      <div className="user-dashboard">
        <div className="sidebar-user">
          <ul className="menu-list-user">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item-container">
                <button
                  onClick={() => handleMenuItemClick(index, item.title)}
                  className={`menu-item-user ${activeIndex === index ? 'active' : ''}`}
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="user-dashboard-content">
          
          {renderSelectedComponent()}
        </div>
      </div>

      <Footer />
      <StickyBar />
    </>
  );
};

export default UserDashboard;
