import React from 'react'
import SidebarCard from './SidebarCard';

const cardData = {
    'All': ['AWS Developer', 'QA Automation', 'PMP', 'Java Full Stack', 'Salesforce Developer', 'ServiceNow', 'Python', 'RPA UI Path', 'Big Data Hadoop', 'Blue Prism', 'Subitem 1', 'Subitem 2'],
    'Project Management': ['PMP', 'Business Analyst'],
    'QA Testing': ['QA Automation', 'Load Runner', 'QA Manual Testing', 'Mobile App Testing'],
    'Data Science': ['Python', 'DataScience with Python', 'Data Science with R'],
    'Programming': ['Java Full Stack Development', 'PHP with MySQL','UI/UX Design','Microsoft .NET','Angular JS Training','Node js','MongoDB Training','JavaScript Course','JQuery Training','React JS Training','SQL'],
      'Salesforce': ['Salesforce Developer', 'Salesforce Admin','Salesforce Lightning','Salesforce Admin Developer','Salesforce Admin Developer'],
    'ServiceNow' : ['ServiceNow'],
      'Cloud Computing': ['AWS Solution Architecture', 'AWS Developer','AWS SysOps Admin','Google Cloud','DevOps','Internet of Things','Snowflake'],
    'Workday': ['Subitem 1', 'Subitem 2'],
      'Mulesoft': ['Subitem 1', 'Subitem 2'],
      'Cyber Security': ['Subitem 1', 'Subitem 2'],
      'Machine learning':['Subitem 1', 'Subitem 2'],
      'BlockChain': ['Subitem 1', 'Subitem 2'],
      'Deep Learning': ['Subitem 1', 'Subitem 2'],
      'Data Warehousing & ETL': ['Subitem 1', 'Subitem 2'],
      'Mobile Development': ['Subitem 1', 'Subitem 2'],
      'Big Data': ['Big Data Hadoop', 'Spark and Scala'],
      'RPA': ['Blue Prism', 'Automation Anywhere','RPA UI Path'],
      'BPM': ['Subitem 1', 'Subitem 2'],
      'Flutter': ['Subitem 1', 'Subitem 2'],
      'Microsoft': ['Subitem 1', 'Subitem 2'],
      'Scrum Master': ['Subitem 1', 'Subitem 2'],
      
}
const SidebarRight = ({ category }) => {
    const cardsToDisplay = cardData[category] || []; // Get cards for the selected category

  return (
    <div className="sidebar-right-all">
      {cardsToDisplay.map((cardTitle, index) => (
        <SidebarCard key={index} title={cardTitle} />
      ))}
    </div>
  );
};
export default SidebarRight