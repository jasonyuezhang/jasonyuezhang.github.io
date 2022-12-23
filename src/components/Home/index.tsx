import React from 'react';
import styles from './styles.module.css'
import FollowMe from '../FollowMe';

const Home: React.FunctionComponent = () => {
  return (
    <section id='home' className={styles.homeContainer}>
      <div className={styles.home}>
        <div className={styles.name}>
          <span className={styles.firstName}>Jiecheng</span>
          <span className={styles.lastName}>Chen</span>
        </div>
        <div className={styles.title}>
          UI/UX Designer Intern
        </div>
        <div className={styles.shortIntro}>
          <p>A UCSD high-achieving junior-year student with extensive Design and Computer Science education looking for a UI/UX internship in 2023 summer</p>
        </div>
      </div>
      <FollowMe />
    </section>
  );
};

export default Home;