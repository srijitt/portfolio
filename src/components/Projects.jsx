import React from 'react'

function Projects() {

    const projects = [
        {
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            link: 'lol.com'
        },
        {
            name: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            link: 'lol.com'
        },
        {
            name: 'Project 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
            link: 'lol.com'
        }
    ]
    
  return (
    <div className='w-full -z-10 relative py-10'>
        <h1 className='text-3xl font-bold'>Projects</h1>

        <div className='flex flex-col lg:flex-row gap-5 mt-10'>
            {projects.map((project, index) => (
                <div className='w-full py-4 rounded-lg lg:w-1/2 h-80 bg-white/30 flex flex-col items-center text-left'>
                <div className='w-[90%] bg-white h-[60%] rounded-lg'></div>
                <div className='w-[90%] mt-4 flex justify-between items-center'>
                    <h1 className='font-bold text-2xl'>{project.name}</h1>
                    <div>
                        <button>Link</button>
                    </div>
                </div>
                <p className='w-[90%] mt-2'>{project.description}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Projects