import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "20px 0", textAlign: "center", marginTop: "auto" }}>
      <p>© {new Date().getFullYear()} Infotech. All rights reserved.</p>
      <div style={{ marginTop: "10px" }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
