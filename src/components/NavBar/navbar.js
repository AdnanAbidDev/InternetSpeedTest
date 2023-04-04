import "./navbar.css";
import { useState, useEffect } from "react";
const Navbar = () => {
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
    <div className="flex-parent-nav">
      <div className="nav-child1">
        Result ID <span className="colored-text">12345</span>
      </div>
      <div className="nav-child2">Mar 20 2013 | 15:32</div>
      <div className="nav-child3">
        City <span className="colored-text">&nbsp;Dubai</span>
      </div>
      {isMobile && (
        <div className="nav-child4">
          Provider Name <span className="colored-text">&nbsp;du</span>
        </div>
      )}
    </div>
  );
};
export default Navbar;
