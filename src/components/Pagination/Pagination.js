import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  // const {title, link, votePoint} = props
  return (
    <div className={styles.center}>
      <div className={styles.pagination}>
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" className={styles.active}>
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
};

export default Pagination;
