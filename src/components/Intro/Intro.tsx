import "./Intro.css";

export function Intro() {
  return (
    <section 
    className="intro flex flex-col justify-center"
    >
      <div 
      className="font-titles greeting-container space-y-1" 
      >
        <h1>João Lima</h1>
        <h2
        className="uppercase font-styled font-bold text-xl">Full Stack Web Developer</h2>
        <h3 className="text-xl">based in Brazil</h3>
        <p className="text-justify">Passionate for learning modern technologies and creating clean applications with</p>
      </div>
    </section> 
  )
}
