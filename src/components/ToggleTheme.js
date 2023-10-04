import { useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MyContext from "../context/MyContext";
export default function ToggleTheme() {
  const { view, setView } = useContext(MyContext);

  const handleView = (event, value) => {
    if (value !== null) {
      setView(value);
    }
  };

  return (
    <ToggleButtonGroup
      value={view}
      exclusive
      onChange={handleView}
      aria-label="theme"
      sx={{ margin: "20px" }}
    >
      <ToggleButton value="dark">Dark Mode</ToggleButton>
      <ToggleButton value="light">Light Mode</ToggleButton>
    </ToggleButtonGroup>
  );
}
