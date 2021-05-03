import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Generic, JSONLD } from "react-structured-data";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const JobDescription = () => {
  let query = useQuery();
  console.log(query.get("id"));
  const [job, setJob]: any = useState(null);

  useEffect(() => {
    let url = "";

    if (query.get("id") === "1") {
      console.log("1 matched ---");
      url = "https://mocki.io/v1/c26529ec-6edf-4f0c-8463-9cb287242009";
    } else if (query.get("id") === "2") {
      console.log("2 matched ---");
      url = "https://mocki.io/v1/29345b43-5ba2-4edc-aaf7-6d4971bee411";
    } else if (query.get("id") === "3") {
      console.log("3 matched ---");
      url = "https://mocki.io/v1/172888c9-a052-486a-8849-2c566e029af9";
    } else if (query.get("id") === "4") {
      console.log("4 matched ---");
      url = "https://mocki.io/v1/5f9cca96-68e1-40bf-b860-af6d19b2a2aa";
    } else if (query.get("id") === "5") {
      console.log("5 matched ---");
      url = "https://mocki.io/v1/13980a0d-266c-41b7-99e7-916c74521754";
    } else if (query.get("id") === "6") {
      console.log("6 matched ---");
      url = "https://mocki.io/v1/521eaeef-3d2d-40d1-b78f-48e370fe123b";
    } else if (query.get("id") === "7") {
      console.log("7 matched ---");
      url = "https://mocki.io/v1/65207424-18b1-4254-99e7-8b4cd4003607";
    }

    axios.get(url).then((response) => {
      console.log("api response ---");
      console.log(response);
      setJob(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <Link to={"/host-project"}>Go back to List</Link>
      </div>
      <br></br> <br></br>
      <div>It is a description of Job Id: {query.get("id")}</div>
      {job && (
        <div>
        <JSONLD>
          <Generic
            type="jobPosting"
            jsonldtype="JobPosting"
            schema={{
              title: job.title,
              baseSalary: job.baseSalary,
              jobBenefits: job.jobBenefits,
              datePosted: job.datePosted,
              description: job.description,
              educationRequirements: job.educationRequirements,
              employmentType: job.employmentType,
              industry: job.industry,
              workHours: job.workHours,
            }}
          >
            <Generic type="jobLocation" jsonldtype="Place">
              <Generic
                type="address"
                jsonldtype="PostalAddress"
                schema={{
                  addressLocality: job.addressLocality,
                  addressRegion: job.addressRegion,
                }}
              />
            </Generic>
          </Generic>
        </JSONLD>
        <br></br> <br></br> <br></br> <br></br>
        <div>
          <div><span>Title: </span><span>{job.title}</span></div>
          <div><span>Base Salary: </span><span>{job.baseSalary}</span></div>
          <div><span>Job Benefits: </span><span>{job.jobBenefits}</span></div>
          <div><span>Date Posted: </span><span>{job.datePosted}</span></div>
          <div><span>Description: </span><span>{job.description}</span></div>
          <div><span>Education Requirements: </span><span>{job.educationRequirements}</span></div>
          <div><span>Employment Type: </span><span>{job.employmentType}</span></div>
          <div><span>Industry: </span><span>{job.industry}</span></div>
          <div><span>Work Hours: </span><span>{job.workHours}</span></div>
          <div><span>Address Locality: </span><span>{job.addressLocality}</span></div>
          <div><span>Address Region: </span><span>{job.addressRegion}</span></div>
        </div>
        </div>
      
      )}
    </>
  );
};
