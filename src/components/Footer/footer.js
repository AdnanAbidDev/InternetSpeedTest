import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillStar,
} from "react-icons/ai";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import "./footer.css";
import { useState, useEffect } from "react";
const Footer = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<AiFillStar className="star-icon" key={i} />);
  }
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex-parent-footer">
      {!isMobile && (
        <div className="child1-footer">
          Provider Name <span className="colored-text">du</span>
        </div>
      )}
      <div className="child2-footer">
        <span className="rate-text">Rate Your Provider for</span>
        <div className="stars-wrapper">{stars}</div>
      </div>
      <div className="child3-footer">
        {!isMobile && <span className="text-share">Share</span>}
        <div className="social-wrapper-icons">
          <FiLink className="icon" />
          <AiOutlineInstagram className="icon" />
          <BsFacebook className="icon" />
          <BsPinterest className="icon" />
          <AiOutlineTwitter className="icon" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
