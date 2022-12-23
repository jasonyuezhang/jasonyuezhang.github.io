import React, { useCallback } from 'react';
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import styles from './styles.module.css'
import musicaleThumbnail from './thumbnails/musicale.png'
import particlesConfig from './particles.json'

interface ProjectsProps {
  totalColNum: number;
  colIdx: number;
  projects: ProjectProps[];
}

interface ProjectProps {
  destLink: string;
  imgLink: string;
  imgAlt: string;
  title: string;
  shortDesc: string;
  longDesc: string;
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const { destLink, imgLink, imgAlt, title, shortDesc } = props;

  return (
    <div className={styles.project}>
      <a href={destLink} target="_blank" rel="noreferrer">
        <img src={imgLink} alt={imgAlt} />
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <span className={styles.title}>{title}</span>
            <span className={styles.shortDesc}>{shortDesc}</span>
          </div>
        </div>
      </a>
    </div>
  )
};

const ProjectsCol: React.FC<ProjectsProps> = (props: ProjectsProps) => {
  const { totalColNum, colIdx, projects } = props;

  return (
    <div className={styles.col}>
    {projects.map((p, idx) => {
      if (idx % totalColNum !== colIdx) return undefined;

      return (
        <Project
          key={"project-" + idx}
          destLink={p.destLink}
          imgLink={p.imgLink}
          imgAlt={p.imgAlt}
          title={p.title}
          shortDesc={p.shortDesc}
          longDesc={p.longDesc}
        />
      )
    })}
  </div>
  )
};

const Projects: React.FC = () => {
  const totalColNum = 2;

  const projects = [
    {
      destLink: 'https://www.figma.com/file/YJfzJ0sPTM9ZVPw5jd0Jgw/Musicale?node-id=10%3A78',
      imgLink: musicaleThumbnail,
      imgAlt: 'musicale',
      title: 'Musicale',
      shortDesc: 'Musicale short description',
      longDesc: 'Musicale long description'
    },
    {
      destLink: 'https://example.com',
      imgLink: 'https://via.placeholder.com/451x300',
      imgAlt: 'placeholder1',
      title: 'Placeholder #1',
      shortDesc: 'Placeholder #1 short description',
      longDesc: 'Placeholder #1 long description'
    },
    {
      destLink: 'https://example.com',
      imgLink: 'https://via.placeholder.com/452x300',
      imgAlt: 'placeholder2',
      title: 'Placeholder #2',
      shortDesc: 'Placeholder #2 short description',
      longDesc: 'Placeholder #2 long description'
    },
  ]

  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // await console.log(container);
  }, []);

  return (
    <section id='projects' className={styles.projectsContainer}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projects}>
        {
          Array(totalColNum)
            .fill(0)
            .map((_, idx) =>
              <ProjectsCol
                key={'projects-col-' + idx}
                totalColNum={totalColNum}
                colIdx={idx}
                projects={projects}
              />)
        }
      </div>
    </section>
  );
};

export default Projects;