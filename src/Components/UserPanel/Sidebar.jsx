import React, { useState } from 'react';
import './Course.css';
import { IoIosArrowForward } from 'react-icons/io';

const Sidebar = ({ onSelectCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [activeIndex, setActiveIndex] = useState(null); // State to track active menu item

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const menuItems = [
    { title: 'All', submenu: [] },
    { title: 'Project Management', submenu: ['PMP', 'Business Analyst'] },
    { title: 'QA Testing', submenu: ['QA Automation', 'Load Runner', 'QA Manual Testing', 'Mobile App Testing'] },
    { title: 'Data Science', submenu: ['Python', 'DataScience with Python', 'Data Science with R'] },
    { title: 'Programming', submenu: ['Java Full Stack Development', 'PHP with MySQL', 'UI/UX Design', 'Microsoft .NET', 'Angular JS Training', 'Node js', 'MongoDB Training', 'JavaScript Course', 'JQuery Training', 'React JS Training', 'SQL'] },
    { title: 'Salesforce', submenu: ['Salesforce Developer', 'Salesforce Admin', 'Salesforce Lightning', 'Salesforce Admin Developer Lightning', 'Salesforce Admin Developer'] },
    { title: 'ServiceNow', submenu: ['ServiceNow'] },
    { title: 'Cloud Computing', submenu: ['AWS Solution Architecture', 'AWS Developer', 'AWS SysOps Admin', 'Google Cloud', 'DevOps', 'Internet of Things', 'Snowflake'] },
    { title: 'Workday', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Mulesoft', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Cyber Security', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Machine learning', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'BlockChain', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Deep Learning', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Data Warehousing & ETL', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Mobile Development', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Big Data', submenu: ['Big Data Hadoop', 'Spark and Scala'] },
    { title: 'RPA', submenu: ['Blue Prism', 'Automation Anywhere', 'RPA UI Path'] },
    { title: 'BPM', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Flutter', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Microsoft', submenu: ['Subitem 1', 'Subitem 2'] },
    { title: 'Scrum Master', submenu: ['Subitem 1', 'Subitem 2'] },
  ];

  const handleMenuItemClick = (index, title) => {
    setActiveIndex(index); // Set the active index
    onSelectCategory(title); // Pass selected category to parent
    toggleDropdown(index);
  };

  return (
    <div className="sidebar">
      <h3 className='sidebar-heading'>Categories</h3>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleMenuItemClick(index, item.title)}
              className={`menu-item ${activeIndex === index ? 'active' : ''}`} // Add 'active' class if the item is selected
            >
              {item.title} <IoIosArrowForward />
            </button>
            {/* {dropdownOpen[index] && item.submenu.length > 0 && (
              <ul className="submenu">
                {item.submenu.map((subitem, subIndex) => (
                  <li
                    key={subIndex}
                    className="submenu-item"
                    onClick={() => onSelectCategory(subitem)} // Pass selected subcategory to parent
                  >
                    {subitem}
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
