import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");
  const handleChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <FormControlLabel control={<Switch />} onChange={handleChange} checked={theme==="dark"}/>
    </>
  );
};
