import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export const ThemeSwitch = () => {
 const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
   let thm = e.target.checked ? "dark" : "light";

    setTheme(thm);

    localStorage.setItem("theme", thm);
  };

  useEffect(() => {
    let currentTheme=localStorage.getItem("theme");
    setTheme(currentTheme)
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [theme]);
  return (
    <>
      <FormControlLabel
        control={<Switch />}
        onChange={handleChange}
        checked={theme === "dark"}
      />
    </>
  );
};
