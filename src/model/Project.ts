import { TechStackItem } from "./TechStackItem";

export type Project = {
  id: number
  name: string
  githubRepository: string
  description: string
  coverImage: string
  deployed: boolean
  applicationUrl: string
  techStackList: Array<TechStackItem>
  images: Array<string>
  inDevelopment: boolean
}

export type ProjectContext = {
  selectProject: (project: Project | null) => void
  selectedProject: Project | null
  previousSlide: () => void
  nextSlide: () => void
  curr: number
}