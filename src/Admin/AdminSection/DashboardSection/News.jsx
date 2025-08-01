import React from 'react'
import CreateTypeForm from '../DashboardComponents/CreateTypeForm'
import CreateNewsForm from '../DashboardComponents/CreateNewsForm'
import TypeTable from '../DashboardComponents/TypeTable'
import NewsTable from '../DashboardComponents/NewsTable'
const News = () => {
  return (
    <div>
        <CreateTypeForm/> 
        <TypeTable/>
        <CreateNewsForm/>   
        <NewsTable/>
    </div>
  )
}

export default News
