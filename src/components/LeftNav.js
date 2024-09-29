import React from 'react'
import LinkCard from './LinkCard'
import "./styles/LeftNav.css"

const LeftNav = ({selectedCourse, setSelectedCourse}) => {
    let links = ['Dashboard', 'Courses']
    let courses= ['HTML','CSS','JavaScript']
  return (
    <aside className='left-nav'>
        <LinkCard links={links} courses={courses} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse}/>
    </aside>
  )
}

export default LeftNav
