import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import UserComponent from "./UserComponent";

const Profile = () => {
  return(
    <>
    <UserComponent />
    <Education/>
    <Experience/>
    <Skill/>
    </>
  );
};

export default Profile;