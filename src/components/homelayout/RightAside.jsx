import React from "react";
import SocialLogin from "../SocialLogin";
import SocialLinks from "./SocialLinks";
import QZone from "./QZone";
import DarkBackground from "../DarkBackground";

const RightAside = () => {
  return (
    <div className="p-5 shadow-sm">
      <SocialLogin />
      <SocialLinks />
      <QZone />
      <DarkBackground />
    </div>
  );
};

export default RightAside;
