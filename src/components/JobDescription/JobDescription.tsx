import React from "react";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const JobDescription = () => {
  let query = useQuery();
  console.log(query.get("id"));

  return (
    <>
      <div>
        <Link to={"/host-project"}>Go back to List</Link>
      </div>

      <div>It is a description of Job Id: {query.get("id")}</div>
    </>
  );
};
