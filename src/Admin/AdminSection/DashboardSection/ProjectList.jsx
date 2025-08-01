import React from 'react'
import CreateProjectForm from '../DashboardComponents/CreateProjectForm'
import ProjectsTable from '../DashboardComponents/ProjectTable'
const ProjectList = () => {
  return (
    <div className='gap-x-10'>
      <CreateProjectForm />
      <ProjectsTable/>
    </div>
  )
}

export default ProjectList
