import { useState, useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { GithubLogo } from '@phosphor-icons/react';
import { getGithubStats } from '../../services/github';
import { GithubStats as GithubStatsModel } from '../../model/Github';
import GithubStats from './components/GithubStats/GithubStats';
import './Projects.css';
import Slider from './components/Slider/Slider';

function Projects() {
  const [ref, isVisible] = useIntersectionObserver({threshold: 0.5});
  const [githubStats, setGithubStats] = useState<GithubStatsModel>();

  useEffect(() => {
    const fetchGithubStats = async () => {
      const searchedGithubStats = await getGithubStats();
      setGithubStats(searchedGithubStats);
    }
    fetchGithubStats();
  }, []);

  return (
    <section 
    ref={ref} 
    className='bg-purple-blue'>
      <div className='flex flex-col items-center gap-8 h-full'>
        <h2 className={`${isVisible ? 'projects-title' : "text-transparent"}`}>projects</h2>
        <GithubStats isVisible={isVisible!} githubStats={githubStats!}/>
        <Slider />
      <a 
      className={`${isVisible ? "github-logo" : ""} self-end content-end p-2 hover:text-orangeish flex gap-2 group transition-colors duration-500 delay-[150ms] items-center`} 
      href={githubStats?.html_url} 
      target='_blank'>
        <p 
        className='hidden lg:block opacity-0 font-light text-lilac transition-all duration-500 delay-75 text-sm group-hover:opacity-100 group-hover:font-semibold hover:text-whitey hover:bg-dark-lilac p-2 rounded-xl'>
          check my profile!
        </p>
        <GithubLogo weight='light' size={"2rem"} className='group-hover:text-orangeish transition-colors duration-500 delay-[150ms]'/>
      </a>
      </div>
    </section>
  )
}

export default Projects;