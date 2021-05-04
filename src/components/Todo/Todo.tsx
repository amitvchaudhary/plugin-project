import React from "react";
import { Link } from "react-router-dom";
import { Generic, JSONLD } from "react-structured-data";
import "./Todo.css";

export const Todo = (props: any) => {
  console.log('each todo ===');
  console.log(props);
  return (
    <>
    <div className="item">
      <div><span>Job Id: </span>{props.data.jobId}</div>
      <div><span>Job Title: </span><Link to={'/host-project/job?id=' + props.data.jobId }>{props.data.jobTitle}</Link></div>
      <div><span>Job Location: </span>{props.data.jobLocation}</div>
      <div><span>Job Description: </span>{props.data.jobDescription}</div>
      <br></br>
    </div>
    <div>
    <JSONLD>
          <Generic
            type="jobPosting"
            jsonldtype="JobPosting"
            schema={{
              title: props.data.jobTitle,
              baseSalary: "500000",
              jobBenefits: "Life, Dental",
              datePosted: "2021-05-03",
              description: props.data.jobDescription,
              educationRequirements: "Bachelor's Degree in Computer Science, Information Systems or related fields of study.",
              employmentType: "Full-time",
              industry: "Computer Software",
              workHours: "60 hours per week",
            }}
          >
            <Generic type="jobLocation" jsonldtype="Place">
              <Generic
                type="address"
                jsonldtype="PostalAddress"
                schema={{
                  addressLocality: "Seattle",
                  addressRegion: "WA",
                }}
              />
            </Generic>
          </Generic>
        </JSONLD>
       
    </div>
    </>
  );
}