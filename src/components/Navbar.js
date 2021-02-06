import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <nav className={`Navbar ${showBackground && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://fontmeme.com/permalink/210206/e103bafc6384aed96e69f13ae16879e9.png"
        alt="neftlix logo"
      />
      <img
        className="nav-avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </nav>
  );
};

export default Navbar;
