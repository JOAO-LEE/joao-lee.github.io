import "./Intro.css";

export function Intro() {
  return (
    <section 
    className="intro flex flex-col justify-center px-8 py-4"
    data-header-title="home"
    >
      <div 
      className="font-titles greeting-container space-y-1" 
      >
        <h1 className="lg:text-6xl lg:mb-6">João Lima<span className="colored-dot-texts font-tipography">.</span>
        </h1>
        <h2
        className="uppercase font-styled font-bold text-xl lg:text-5xl">Full Stack Web Developer<span className="font-styled-bold colored-dot-job-description">.</span></h2>
        <h3 className="text-xl lg:text-6xl">Based in Brazil<span className="colored-dot-texts font-tipography">.</span></h3>
        <p className="text-justify text-2xl">Passionate about learning modern technologies & building impactful, clean applications with.</p>
      </div>
    </section> 
  )
}
