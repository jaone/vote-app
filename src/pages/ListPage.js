import React from "react";
import SubmitLink from "@/components/SubmitLink";
import VoteBoxList from "@/components/VoteBoxList";
import Pagination from "@/components/Pagination";

function ListPage() {
  return (
    <>
      <div className="votebox-wrapper">
        <div className="filter-dropdown">asdas</div>
        <SubmitLink />
        <VoteBoxList />
        <Pagination />
      </div>
    </>
  );
}

export default ListPage;
