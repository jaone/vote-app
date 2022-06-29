import React from 'react';
import { Card, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styles from './VoteBox.module.scss';
import { voteChange, getVoteList } from '../../store/slices/voteSlice';

const VoteBox = (props) => {
  console.log({ props });

  const { title, link, votePoint, id } = props;
  const dispatch = useDispatch();
  return (
    <div className={styles.votebox}>
      <div className={styles.pointbox}>
        <div className={styles.number}>{votePoint}</div>
        POINTS
      </div>
      <div>
        <div className={styles.delete}></div>
        <div className={styles.title}>
          {title}
          <div className={styles.link}>({link})</div>
        </div>
        <div className={styles.vote}>
          <button
            onClick={() => dispatch(voteChange(id, 'inc', votePoint))}
            className={styles.up}
          >
            Up Vote
          </button>
          <button
            onClick={() => dispatch(voteChange(id, 'dec', votePoint))}
            className={styles.down}
          >
            Down Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteBox;
