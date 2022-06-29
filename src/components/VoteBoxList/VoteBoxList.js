import React from 'react';
import VoteBox from '../VoteBox';
import styles from './VoteBoxList.module.scss';
import { useSelector } from 'react-redux';
import { getVoteList } from '../../store/slices/voteSlice';

function VoteBoxList() {
  const voteList = useSelector(getVoteList);
  return (
    <div className={styles.votebox__list}>
      {voteList?.map((data) => (
        <VoteBox {...data} />
      ))}
    </div>
  );
}

export default VoteBoxList;
