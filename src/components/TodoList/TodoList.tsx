import axios from "axios";
import React, { useEffect, useState } from "react";
import { Todo } from "../Todo/Todo";

export const TodoList = (props: any) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/511626bb-48bf-4823-a620-3259432e8e9d")
      .then((response) => {
        console.log("api response ---");
        console.log(response);
        setJobs(response.data);
      });
  }, []);

  console.log("todolist ----");
  console.log(props);
  return (
    <>
      <div>
        {jobs && jobs.map((job: any) => <Todo key={job.id} data={job}></Todo>)}
      </div>
    </>
  );
};
