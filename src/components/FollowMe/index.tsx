import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const FollowMe: React.FunctionComponent = () => {
  return (
    <div className={styles.followMeContainer}>
      <div className={styles.followMe}>
        <a className={styles.link}
           href="http://www.linkedin.com/in/jasonarong96"
           target="_blank"
           rel="noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          <span className={styles.iconAlt}>jasonarong96</span>
        </a>
        <a className={styles.link}href="mailto:jasonarong96@gmail.com?subject=From Your Portfolio Page">
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          <span className={styles.iconAlt}>jasonarong96@gmail.com</span>
        </a>
        <span className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faPhone} />
          <span className={styles.iconAlt}>559-428-6543</span>
        </span>
      </div>
    </div>
  );
};

export default FollowMe;