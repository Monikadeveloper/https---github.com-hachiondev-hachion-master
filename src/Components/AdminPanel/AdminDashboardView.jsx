import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard';

const AdminDashboardView = () => {
  return (
   <>
   <AdminNavbar/>
   <div style={{display:'flex',flexDirection:'row'}}>
    <AdminSidebar/>
    <AdminDashboard/>
   </div>
   </>
  )
}

export default AdminDashboardView