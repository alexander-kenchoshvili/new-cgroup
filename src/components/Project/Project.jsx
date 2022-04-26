import {useEffect} from 'react'
import Projects from '../home/projects/Projects'

function Project() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='project-section'>
        <Projects />
    </div>
  )
}

export default Project