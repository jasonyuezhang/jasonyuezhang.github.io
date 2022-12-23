import React, { Fragment, useEffect, useState } from 'react';
import styles from './styles.module.css'

interface Props {
  children: React.ReactNode;
}

const TopNav: React.FC<Props> = (props) => {
  const { children } = props;

  const [selecProjects, setSelecProjects] = useState(false);

  const onScrollHandler = (event: Event) => {
    const homeHeight = document.getElementById('home')?.clientHeight || 0;
    if (window.scrollY >= homeHeight - 20) {
      setSelecProjects(true);
    } else {
      setSelecProjects(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    <Fragment>
      <section className={styles.topNavContainer}>
        <div className={[styles.topNav, selecProjects && styles.white].join(' ')}>
          <a className={[styles.navItem, !selecProjects && styles.highlight].join(' ')} href='#home'>Home</a>
          <a className={[styles.navItem, selecProjects && styles.highlight].join(' ')} href='#projects'>Projects</a>
        </div>
      </section>
      {children}
    </Fragment>
  );
};

export default TopNav;