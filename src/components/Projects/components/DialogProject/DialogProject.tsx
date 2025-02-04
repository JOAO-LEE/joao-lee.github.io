import { RefObject } from 'react'
import { Project } from '../../../../model/Project'
import ProjectActions from '../ProjectActions/ProjectActions'
import { Eye, X } from '@phosphor-icons/react'
import { Link } from 'react-router'

export default function DialogProject({ dialogRef, selectedProject }: { dialogRef: RefObject<HTMLDialogElement>, selectedProject: Project | null }) {
  return (
    <dialog 
    ref={dialogRef} 
    className="backdrop:bg-black/50 w-full bg-blu-200 p-4 border-none outline-none flex flex-col gap-4 project-dialog text-grayish"
    >
      <div className="flex justify-between items-center">
        <p className="text-yel-100 font-styled tracking-widest text-xl">{selectedProject?.name}</p>
        <X
        className="text-yel-100 text-3xl"
        onClick={() => dialogRef.current?.close()} 
        />
      </div>
      <div className="flex justify-end">
        <ProjectActions
        deployed={selectedProject?.deployed ?? false} 
        applicationUrl={selectedProject?.applicationUrl ?? ""} 
        githubRepository={selectedProject?.githubRepository ?? ""} 
        /> 
      </div>
      <img src={selectedProject?.coverImage} alt="" />
      <article className="text-xs">
        <p className="font-styled-bold text-lg text-yel-100">About</p>
        <p className="text-justify text-grayish">{selectedProject?.description}</p>
      </article>
      <ul 
      className="flex gap-1 justify-between lowercase text-xs space-x-2.5"
      >
        {
          selectedProject?.techStackList
            .map((tech, index) => (
              <li 
              key={index}
              className="flex items-center gap-1 bg-yel-100  text-blu-100 p-1"
              >
                <i className={tech.iconClass}></i>
                <span className="bg-yel-100 ">{tech.name}</span>
              </li>
          ))
        }
      </ul>
      <div className='flex justify-end'>
        <Link to={`/projects/#/${selectedProject?.id}`} className="flex items-center gap-2 border border-yel-100 p-1 text-xs text-yel-100">
          <Eye className='text-sm' />
          <span>see more</span>
        </Link>
      </div>
    </dialog>
  )
}
