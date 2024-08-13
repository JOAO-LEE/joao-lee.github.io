 export type Project = {
  id: number,
  name: string,
  githubRepository: string,
  description: string,
  image: string,
  deployed: boolean,
  applicationUrl: string
}

export type ProjectContext = {
  curr: number
  previousSlide: () => void
  nextSlide: () => void
}