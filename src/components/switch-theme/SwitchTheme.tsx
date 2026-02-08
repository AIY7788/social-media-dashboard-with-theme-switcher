import { useState, useEffect } from "react";
import "./SwitchTheme.scss";

function Switch_Theme() {
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
  };

  return (
    <div className="container-switch">
      <p className="switch-label">Dark Mode</p>
      <label className="switch-toggle" htmlFor="switch-toggle">
        <input
          type="checkbox"
          id="switch-toggle"
          checked={theme === "light"}
          onChange={handleSwitchTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Switch_Theme;