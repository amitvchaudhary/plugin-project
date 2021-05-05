import React from "react";
import { Link } from "react-router-dom";
import { Generic, JSONLD } from "react-structured-data";
import "./Todo.css";

export const Todo = (props: any) => {
  console.log("each todo ===");
  console.log(props);
  return (
    <>
      <div className="item">
        <div>
          <span>Job Id: </span>
          {props.data.jobId}
        </div>
        <div>
          <span>Job Title: </span>
          <Link to={"/joblisting-page/job?id=" + props.data.jobId}>
            {props.data.jobTitle}
          </Link>
        </div>
        <div>
          <span>Job Location: </span>
          {props.data.jobLocation}
        </div>
        <div>
          <span>Job Description: </span>
          {props.data.jobDescription}
        </div>
        <br></br>
      </div>
      <div>
        <JSONLD>
          <Generic
            type="jobPosting"
            jsonldtype="JobPosting"
            schema={{
              title: props.data.jobTitle,
              jobBenefits: "Life, Dental",
              datePosted: "2021-05-03",
              validThrough: "2021-06-03T12:00",
              description: props.data.jobDescription,
              // educationRequirements: "Bachelor's Degree in Computer Science, Information Systems or related fields of study.",
              employmentType: "Full-time",
              industry: "Computer Software",
              workHours: "60 hours per week",
            }}
          >
            <Generic
              type="hiringOrganization"
              jsonldtype="Organization"
              schema={{
                name: "Host Project",
                sameAs: "https://host-project.netlify.app/",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              }}
            ></Generic>
            <Generic type="jobLocation" jsonldtype="Place">
              <Generic
                type="address"
                jsonldtype="PostalAddress"
                schema={{
                  streetAddress: "1600 Amphitheatre Pkwy",
                  addressLocality: "Mountain View",
                  addressRegion: "CA",
                  postalCode: "94043",
                  addressCountry: "US"
                }}
              />
            </Generic>
            <Generic type="baseSalary" jsonldtype="MonetaryAmount" schema={{currency: "USD"}}>
              <Generic type="value" jsonldtype="QuantitativeValue" schema={{value: "40.00", unitText: "HOUR"}}></Generic>
            </Generic>
          </Generic>
        </JSONLD>
      </div>
    </>
  );
};
