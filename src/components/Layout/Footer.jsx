import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { Authorized } = useContext(Context);
  return (
    <footer className={Authorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved.</div>
      <div>
        <Link to={"https://www.facebook.com/azeem.malik.39566/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.youtube.com/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/azeem.malik3/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;