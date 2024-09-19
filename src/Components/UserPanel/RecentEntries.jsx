import React from 'react'
import RecentEntriesCard from './RecentEntriesCard';
import automation from '../../Assets/automationtesting.png';
import salesforce from '../../Assets/salesforce.png';
import salesforceadmin from '../../Assets/salesforceadmin.png';
import salesforceinterview from '../../Assets/salesforceinterview.png';
import './Blogs.css';

const RecentEntries = () => {
  return (
    <div className='recent-entries'>
     <RecentEntriesCard imageSrc={automation} content='Importance of Automation in Software Testing' 
     username='Srilatha' date='24-09-10'/>
     <RecentEntriesCard imageSrc={salesforce} content='7 Reasons to Learn Salesforce in 2023 By' 
     username='Sandeep' date='24-09-10'/>
     <RecentEntriesCard imageSrc={salesforceadmin} content='Salesforce admin Interview FAQs' 
     username='Pushpa' date='24-09-10'/>
     <RecentEntriesCard imageSrc={salesforceinterview} content='Salesforce Developer Interview FAQs' 
     username='Ramkrishna' date='24-09-10'/>
    </div>
  )
}

export default RecentEntries