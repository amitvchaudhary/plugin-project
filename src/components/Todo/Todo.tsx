import React from "react";
import { Link } from "react-router-dom";
import "./Todo.css";

export const Todo = (props: any) => {
  console.log('each todo ===');
  console.log(props);
  return (
    <div className="item">
      <div><span>Job Id: </span>{props.data.jobId}</div>
      <div><span>Job Title: </span><Link to={'/host-project/job?id=' + props.data.jobId }>{props.data.jobTitle}</Link></div>
      <div><span>Job Location: </span>{props.data.jobLocation}</div>
      <div><span>Job Description: </span>{props.data.jobDescription}</div>
      <br></br>
    </div>
  );
}