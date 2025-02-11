import { RefObject } from 'react'
import { Project } from '../../../../model/Project'
import { Eye, Gear, X } from '@phosphor-icons/react';
import { IconedLink } from '../../IconedLink/IconedLink';
import { LittleTechStackItem } from '../../TechStack/LittleTechStackItem/LittleTechStackItem';

export function DialogProject({ dialogRef, selectedProject }: { dialogRef: RefObject<HTMLDialogElement>, selectedProject: Project | null }) {

  return (
    <dialog 
    ref={dialogRef} 
    className="backdrop:bg-black/50 w-full bg-blu-100 lg:w-1/3 lg:h-2/4/2 p-4 shadow-2xl outline-none flex flex-col gap-4 project-dialog text-grayish "
    >
      <div className="flex justify-between items-center border-b border-grayish py-4">
        <p className="text-yel-100 font-styled tracking-widest text-xl lg:text-3xl">{selectedProject?.name}</p>
        <X
        className="text-yel-100 text-3xl lg:text-4xl"
        onClick={() => dialogRef.current?.close()} 
        />
      </div>
      <img 
      src={selectedProject?.coverImage} 
      alt=""
      className="w-96 lg:mx-auto" 
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
             <LittleTechStackItem 
             key={index} 
             {...tech} 
             />
          ))
        }
      </ul>
      <ul 
      className={`flex text-blu-100 border-t border-grayish py-4 ${selectedProject?.inDevelopment ? "justify-between" : "justify-end gap-2"} items-center text-xs lg:text-sm`}
      >
        {
          selectedProject?.inDevelopment 
          && 
            (
              <li className="flex gap-2 items-center border border-yel-100 px-2 py-1 h-min group hover:bg-yel-100 hover:text-blu-100 w-fit text-grayish">
                <Gear className="text-2xl text-yel-100 group-hover:animate-spin group-hover:text-blu-100"/>
                <p>in development</p>
              </li>
            )
          }
        <IconedLink 
        icon={<Eye className='text-2xl' />} 
        title='see more' 
        url={`/projects/${selectedProject?.id}`} 
        />
      </ul>
    </dialog>


  )
}