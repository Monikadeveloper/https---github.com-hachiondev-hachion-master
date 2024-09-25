import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Pagination from '@mui/material/Pagination';
import './Admin.css';
import CourseCategory from './CourseCategory';
import automation from '../../Assets/image 80.png';
import python from '../../Assets/image 90.png';

// Styling the table cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#00AEEF',
    color: theme.palette.common.white,
    borderRight: '1px solid white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRight: '1px solid #e0e0e0',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Sample data creation
function createData(S_No, image, course_name, date, action,category_name,schedule_course_name,schedule_date,week,time,duration) {
  return { S_No, image, course_name, date, action,category_name,schedule_course_name,schedule_date,week,time,duration };
}

// Example rows for Course Details
const courseDetailsRows = [
    createData(1,<img src={automation} height={50} alt='course'/>,'Qa Automation','25-11-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>),
    createData(2,<img src={python}  height={50} alt='course'/>,'Python','12-03-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(3, <img src={automation}  height={50} alt='course'/>,'Tableau','1-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(4,<img src={python}  height={50} alt='course'/>,'Big Data Hadoop','11-10-2019',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>  ),
    createData(5,<img src={automation}  height={50} alt='course'/>,'Salesforce Developer','12-8-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(6, <img src={python}  height={50} alt='course'/> ,'Salesforce Admin','01-12-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(7, <img src={automation}  height={50} alt='course'/>,'Data Science with Python','18-4-2023', <><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(8, <img src={python}  height={50} alt='course'/>,'Blue Prism','12-1-2021' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(9,<img src={automation}  height={50} alt='course'/>,'Load Runner','11-1-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(10, <img src={python}  height={50} alt='course'/>,'Service now','13-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
];
// Example rows for Schedule
const scheduleRows = [
    createData(1,null,null,null,null,'Qa Testing','Qa Automation', 'July 09 2024','Tuesday','07:30 PM','1 Hour'),
    createData(2,null,null,null,null,'Qa Testing','Qa Automation', 'July 19 2024','Friday','10:30 PM','1 Hour' ),
    createData(3, null,null,null,null,'Data Science','Python', 'July 23 2024','Monday','07:30 PM','1 Hour' ),
];

// Add rows for other categories as needed
const curriculumRows =  [
    createData(1,<img src={automation}/>,'Qa Automation','25-11-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>),
    createData(2,<img src={python}/>,'Python','12-03-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(3, <img src={automation}/>,'Tableau','1-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(4,<img src={python}/>,'Big Data Hadoop','11-10-2019',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>  ),
    createData(5,<img src={automation}/>,'Salesforce Developer','12-8-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(6, <img src={python}/>,'Salesforce Admin','01-12-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(7, <img src={automation}/>,'Data Science with Python','18-4-2023', <><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(8, <img src={python}/>,'Blue Prism','12-1-2021' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(9,<img src={automation}/>,'Load Runner','11-1-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(10, <img src={python}/>,'Service now','13-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
]; // Add data here
const faqRows =  [
    createData(1,<img src={automation}/>,'Qa Automation','25-11-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>),
    createData(2,<img src={python}/>,'Python','12-03-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(3, <img src={automation}/>,'Tableau','1-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(4,<img src={python}/>,'Big Data Hadoop','11-10-2019',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>  ),
    createData(5,<img src={automation}/>,'Salesforce Developer','12-8-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(6, <img src={python}/>,'Salesforce Admin','01-12-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(7, <img src={automation}/>,'Data Science with Python','18-4-2023', <><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(8, <img src={python}/>,'Blue Prism','12-1-2021' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(9,<img src={automation}/>,'Load Runner','11-1-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(10, <img src={python}/>,'Service now','13-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
];// Add data here
const demoVideoRows =  [
    createData(1,<img src={automation}/>,'Qa Automation','25-11-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>),
    createData(2,<img src={python}/>,'Python','12-03-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(3, <img src={automation}/>,'Tableau','1-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(4,<img src={python}/>,'Big Data Hadoop','11-10-2019',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>  ),
    createData(5,<img src={automation}/>,'Salesforce Developer','12-8-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(6, <img src={python}/>,'Salesforce Admin','01-12-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(7, <img src={automation}/>,'Data Science with Python','18-4-2023', <><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(8, <img src={python}/>,'Blue Prism','12-1-2021' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(9,<img src={automation}/>,'Load Runner','11-1-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(10, <img src={python}/>,'Service now','13-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
];// Add data here
const regularVideoRows =  [
    createData(1,<img src={automation}/>,'Qa Automation','25-11-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>),
    createData(2,<img src={python}/>,'Python','12-03-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(3, <img src={automation}/>,'Tableau','1-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(4,<img src={python}/>,'Big Data Hadoop','11-10-2019',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>  ),
    createData(5,<img src={automation}/>,'Salesforce Developer','12-8-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(6, <img src={python}/>,'Salesforce Admin','01-12-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(7, <img src={automation}/>,'Data Science with Python','18-4-2023', <><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(8, <img src={python}/>,'Blue Prism','12-1-2021' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(9,<img src={automation}/>,'Load Runner','11-1-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(10, <img src={python}/>,'Service now','13-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
]; // Add data here
const videoAccessRows =  [
    createData(1,<img src={automation}/>,'Qa Automation','25-11-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>),
    createData(2,<img src={python}/>,'Python','12-03-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(3, <img src={automation}/>,'Tableau','1-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(4,<img src={python}/>,'Big Data Hadoop','11-10-2019',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>  ),
    createData(5,<img src={automation}/>,'Salesforce Developer','12-8-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(6, <img src={python}/>,'Salesforce Admin','01-12-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(7, <img src={automation}/>,'Data Science with Python','18-4-2023', <><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(8, <img src={python}/>,'Blue Prism','12-1-2021' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(9,<img src={automation}/>,'Load Runner','11-1-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(10, <img src={python}/>,'Service now','13-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
]; // Add data here
const resumeRows =  [
    createData(1,<img src={automation}/>,'Qa Automation','25-11-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>),
    createData(2,<img src={python}/>,'Python','12-03-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(3, <img src={automation}/>,'Tableau','1-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(4,<img src={python}/>,'Big Data Hadoop','11-10-2019',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>  ),
    createData(5,<img src={automation}/>,'Salesforce Developer','12-8-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(6, <img src={python}/>,'Salesforce Admin','01-12-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(7, <img src={automation}/>,'Data Science with Python','18-4-2023', <><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(8, <img src={python}/>,'Blue Prism','12-1-2021' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(9,<img src={automation}/>,'Load Runner','11-1-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(10, <img src={python}/>,'Service now','13-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
];// Add data here
const reviewRows =  [
    createData(1,<img src={automation}/>,'Qa Automation','25-11-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>),
    createData(2,<img src={python}/>,'Python','12-03-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(3, <img src={automation}/>,'Tableau','1-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(4,<img src={python}/>,'Big Data Hadoop','11-10-2019',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></>  ),
    createData(5,<img src={automation}/>,'Salesforce Developer','12-8-2021',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(6, <img src={python}/>,'Salesforce Admin','01-12-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(7, <img src={automation}/>,'Data Science with Python','18-4-2023', <><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(8, <img src={python}/>,'Blue Prism','12-1-2021' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(9,<img src={automation}/>,'Load Runner','11-1-2022',<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
    createData(10, <img src={python}/>,'Service now','13-10-2023' ,<><FaEdit className='edit' /> <RiDeleteBin6Line className='delete' /></> ),
]; // Add data here

export default function Course() {
  const [activeTab, setActiveTab] = useState('courseDetails'); // Default tab is Course Details

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Define a function to return the correct data based on the active tab
  const getCurrentRows = () => {
    switch (activeTab) {
      case 'courseDetails': return courseDetailsRows;
      case 'schedule': return scheduleRows;
      case 'curriculum': return curriculumRows;
      case 'faq': return faqRows;
      case 'demoVideos': return demoVideoRows;
      case 'regularVideos': return regularVideoRows;
      case 'videoAccess': return videoAccessRows;
      case 'resume': return resumeRows;
      case 'review': return reviewRows;
      default: return [];
    }
  };

  return (
    <>   
      <div className="certificate-tabs">
        {/* Tab Navigation */}
        <div 
          className={`tab-item ${activeTab === 'courseDetails' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('courseDetails')}
        >
          Course Details
        </div>
        <div 
          className={`tab-item ${activeTab === 'schedule' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('schedule')}
        >
          Schedule
        </div>
        <div 
          className={`tab-item ${activeTab === 'curriculum' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('curriculum')}
        >
          Curriculum
        </div>
        <div 
          className={`tab-item ${activeTab === 'faq' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('faq')}
        >
          FAQ
        </div>
        <div 
          className={`tab-item ${activeTab === 'demoVideos' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('demoVideos')}
        >
          Demo Videos
        </div>
        <div 
          className={`tab-item ${activeTab === 'regularVideos' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('regularVideos')}
        >
          Regular Videos
        </div>
        <div 
          className={`tab-item ${activeTab === 'videoAccess' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('videoAccess')}
        >
          Video Access
        </div>
        <div 
          className={`tab-item ${activeTab === 'resume' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('resume')}
        >
          Resume
        </div>
        <div 
          className={`tab-item ${activeTab === 'review' ? 'active-tab' : ''}`}
          onClick={() => handleTabChange('review')}
        >
          Review
        </div>
      </div>

      <CourseCategory
        pageTitle="Course"
        headerTitle={activeTab.replace(/([A-Z])/g, ' $1')} // Dynamically updates the header title
        buttonLabel={`Add ${activeTab.replace(/([A-Z])/g, ' $1')}`} // Dynamic button label
        onAdd={() => {
          console.log(`Navigating to Add ${activeTab} Page`);
        }}
      />

      {/* Table Content */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell><Checkbox /></StyledTableCell>
              <StyledTableCell>S.No.</StyledTableCell>
              
              {activeTab === 'Reviews' || activeTab === 'courseDetails' ? (
                <>
                 
                  {activeTab === 'courseDetails' && (
                    <>
                     <StyledTableCell align="center">Image</StyledTableCell>
                      <StyledTableCell align="center">Course Name</StyledTableCell>
                      <StyledTableCell align="center">Date</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </>
                  )}
                </>
              ) : (
              
                <>
                     <StyledTableCell align="center">Category Name</StyledTableCell>
                      <StyledTableCell align="center">Course Name</StyledTableCell>
                      <StyledTableCell align="center">Date</StyledTableCell>
                      <StyledTableCell align="center">Week</StyledTableCell>
                      <StyledTableCell align="center">Time</StyledTableCell>
                      <StyledTableCell align="center">Duration</StyledTableCell>
                    </>
              )}
              
             
            </TableRow>
          </TableHead>
          <TableBody>
            {getCurrentRows().map((row) => (
              <StyledTableRow key={row.S_No}>
                <StyledTableCell><Checkbox /></StyledTableCell>
                <StyledTableCell>{row.S_No}</StyledTableCell>
                {/* Render course details or schedule-specific columns */}
                
                {activeTab === 'courseDetails' && (
                  <>
                  <StyledTableCell align="center">{row.image}</StyledTableCell>
                    <StyledTableCell align="center">{row.course_name}</StyledTableCell>
                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                    <StyledTableCell align="center">{row.action}</StyledTableCell>
                  </>
                )}:
                 {activeTab === 'schedule' && (
                  <>
                    <StyledTableCell align="center">{row.category_name}</StyledTableCell>
                    <StyledTableCell align="center">{row.schedule_course_name}</StyledTableCell>
                    <StyledTableCell align="center">{row.schedule_date}</StyledTableCell>
                    <StyledTableCell align="center">{row.week}</StyledTableCell>
                    <StyledTableCell align="center">{row.schedule_date}</StyledTableCell>
                    <StyledTableCell align="center">{row.duration}</StyledTableCell>
                  </>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <div className='pagination'>
        <Pagination count={10} color="primary" />
      </div>
    </>
  );
}
