

import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ name, trainer, duration, status }) => {
  const statusStyle = {
    color: status === 'ongoing' ? 'green' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={statusStyle}>{status.toUpperCase()} Cohort</h3>
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Trainer</dt>
        <dd>{trainer}</dd>

        <dt>Duration</dt>
        <dd>{duration}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
