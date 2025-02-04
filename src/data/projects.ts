import { Project } from "../model/Project";
// import xCloneHomePage from "../media/projects/x-clone/x-clone-homepage.png";
// import googleHomePage from "../media/projects/google-clone/google-clone-homepage.png";
// import petMatchImage from "../media/projects/petmatch/petmatch-homepage.png";

export const projects: Array<Project> = [
  {
    id: 0,
    name: "X Clone",
    githubRepository: "https://github.com/JOAO-LEE/x_clone",
    description: "X's (former Twitter) replica. Users can create, like, reply and delete posts of their own. It's also possible to add images to a post. Currently requires a Google Account to use.",
    coverImage: "src/media/projects/x-clone/x-clone-cover.png",
    deployed: true,
    applicationUrl: "https://x-clone-tan-seven.vercel.app/",
    techStackList: [
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
      { name: "React.js", iconClass: "devicon-react-original" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
      { name: "TailwindCSS", iconClass: "devicon-tailwindcss-original" },
      { name: "Firebase", iconClass: "devicon-firebase-plain" },
    ],
    images: ["src/media/projects/x-clone/x-clone-homepage.png"]
  },
  {
    id: 1,
    name: "Google Clone",
    githubRepository: "https://github.com/JOAO-LEE/google_clone",
    description: "A replica of the most used search engine. It is possible to search websites, images and it has a \"I'm feeling lucky\" button that randomize the search. The app's footer shows the country the user is using the app from.",
    coverImage: "src/media/projects/google-clone/google-clone-cover.png",
    deployed: true,
    applicationUrl: "https://google-clone-eta-henna.vercel.app/",
    techStackList: [
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
      { name: "React.js", iconClass: "devicon-react-original" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
      { name: "TailwindCSS", iconClass: "devicon-tailwindcss-original" },
    ],
    images: [
      "src/media/projects/google-clone/google-clone-homepage.png",
      "src/media/projects/google-clone/google_search_web_results.png",
      "src/media/projects/google-clone/google_search_web_loading.png",
      "src/media/projects/google-clone/google_search_images_results.png",
      "src/media/projects/google-clone/google_search_images_loading.png",
    ]
  },
  {
    id: 2,
    name: "PETMatch",
    githubRepository: "https://github.com/JOAO-LEE/PETMatch",
    description: "PETMatch is a web application developed with JavaScript, HTML, and CSS to address the issue of pet abandonment, a prevalent problem in Brazil. The platform connects animals in need of a home with individuals interested in adopting, promoting responsible pet adoption through user registration and scheduled visits to partnered NGOs.",
    coverImage: "src/media/projects/petmatch/petmatch-cover.png",
    deployed: false,
    applicationUrl: "",
    techStackList: [
      { name: "HTML", iconClass: "devicon-html5-plain" },
      { name: "CSS", iconClass: "devicon-css3-plain"},
      { name: "JavaScript", iconClass: "devicon-javascript-plain" },
    ],
    images: ["src/media/projects/petmatch/petmatch-homepage.png"]
  },
];
