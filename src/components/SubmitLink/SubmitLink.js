timport React from "react";
import { Card, message } from "antd";
import styles from './SubmitLink.module.scss';

const VoteBox = (props) => {
  const {title, link, votePoint} = props
  return (
    <div className={styles.submitButton}>
      <div className={styles.pointbox}>
        <div className={styles.number}>
          +
        </div>
      </div>
      <div>
        <div className={styles.delete}></div>
        <div className={styles.title}>
          SUBMIT A LINK
        </div>
      </div>
    </div>
  );
};

export default VoteBox;
