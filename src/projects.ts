import xCloneImage from "./images/x-clone.png";
import googleCloneImage from "./images/google-clone.png";
import petMatchImage from "./images/petmatch.png";
import { Project } from "./model/Project";

export const projects: Array<Project> = [
  {
    id: 0,
    name: "X Clone",
    githubRepository: "https://github.com/JOAO-LEE/x_clone",
    description: "X's (former Twitter) replica. Users can create, like, reply and delete posts of their own. It's also possible to add images to a post. Currently requires a Google Account to use.",
    image: xCloneImage,
    deployed: true,
    applicationUrl: "https://x-clone-tan-seven.vercel.app/",
    techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Firebase"]
  },
  {
    id: 1,
    name: "Google Clone",
    githubRepository: "https://github.com/JOAO-LEE/google_clone",
    description: "A replica of the most used search engine. It is possible to search websites, images and it has a \"I'm feeling lucky\" button that randomize the search. The app's footer shows the country the user is using the app from.",
    image: googleCloneImage,
    deployed: true,
    applicationUrl: "https://google-clone-eta-henna.vercel.app/",
    techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Firebase"]
  },
  {
    id: 2,
    name: "PETMatch",
    githubRepository: "https://pet-match-gamma.vercel.app/",
    description: "PETMatch is a web application developed with JavaScript, HTML, and CSS to address the issue of pet abandonment, a prevalent problem in Brazil. The platform connects animals in need of a home with individuals interested in adopting, promoting responsible pet adoption through user registration and scheduled visits to partnered NGOs.",
    image: petMatchImage,
    deployed: true,
    applicationUrl: "https://pet-match-gamma.vercel.app/",
    techStack: ["HTML", "JavaScript", "CSS"]
  },
];
