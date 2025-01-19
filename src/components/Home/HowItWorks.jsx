import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How this Portal Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Sign Up and Get Started</p>
              <p>
              Join our platform by creating an account in just a few clicks. It's quick, easy, and free!
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Discover Opportunities or Share Openings</p>
              <p>
              Browse thousands of jobs that match your skills or post job openings to attract top talent.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Connect and Collaborate</p>
              <p>
              Submit your application for the perfect role or find qualified candidates to grow your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;