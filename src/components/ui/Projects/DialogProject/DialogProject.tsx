import { RefObject } from 'react'
import { Project } from '../../../../model/Project'
import ProjectActions from '../ProjectActions/ProjectActions'
import { Eye, X } from '@phosphor-icons/react';
import AnimatedButton from '../AnimatedButton/AnimatedButton'

export function DialogProject({ dialogRef, selectedProject }: { dialogRef: RefObject<HTMLDialogElement>, selectedProject: Project | null }) {

  return (
    <dialog 
    ref={dialogRef} 
    className="backdrop:bg-black/50 w-full bg-blu-100 lg:w-1/3 lg:h-2/4/2 p-4 shadow-2xl outline-none flex flex-col gap-4 project-dialog text-grayish "
    >
      <div className="flex justify-between items-center">
        <p className="text-yel-100 font-styled tracking-widest text-xl lg:text-3xl">{selectedProject?.name}</p>
        <X
        className="text-yel-100 text-3xl lg:text-4xl"
        onClick={() => dialogRef.current?.close()} 
        />
      </div>
      <img 
      src={selectedProject?.coverImage} 
      alt=""
      className='w-96 lg:mx-auto' 
      />
      <article className="text-xs lg:text-sm">
        <p className="font-styled-bold text-lg text-yel-100 lg:text-2xl">About</p>
        <p className="text-justify text-grayish">{selectedProject?.description}</p>
      </article>
      <ul 
      className="flex lowercase text-xs gap-2 justify-between lg:justify-start lg:gap-6 flex-wrap"
      >
        {
          selectedProject?.techStackList
            .map((tech, index) => (
              <li 
              key={index}
              className="flex items-center gap-1 bg-yel-100  text-blu-100 p-1 lg:text-sm"
              >
                <i className={tech.iconClass}></i>
                <span className="bg-yel-100">{tech.name}</span>
              </li>
          ))
        }
      </ul>
      <div>
      <div className='flex justify-between items-center mt-4'>
        <ProjectActions
        deployed={selectedProject?.deployed ?? false} 
        applicationUrl={selectedProject?.applicationUrl ?? ""} 
        githubRepository={selectedProject?.githubRepository ?? ""} 
        />
        <AnimatedButton link={`/#/projects/${selectedProject?.id}`} icon={<Eye/>} title='see more'/>
      </div>
      </div>
    </dialog>
  )
}