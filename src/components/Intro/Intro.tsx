import "./Intro.css";

function Intro() {
  return (
    <section 
    className="intro p-2 flex flex-col justify-center"
    >
      <div 
      className="text-intro greeting-container space-y-1" 
      >
        <h1 className="text-xl">João Lima</h1>
        <h2
        className="uppercase font-titles tracking-widest font-semibold text-xl text-wrap">Full Stack Web Developer</h2>
        <h3 className="text-xl after:content-['.'] ">based in Brazil</h3>
        <p className="mini-about after:content-['.']  text-justify">Passionate for learning modern technologies and creating clean applications with</p>
      </div>
    </section>
  )
}
// after:text-pal-orange-100
// after:text-pal-orange-100
export default Intro;