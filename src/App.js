import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useContext } from "react";
import AuthContext from "./auth/AuthContext";
import MyContext from "./context/MyContext";
import JobDetailPage from "./pages/JobDetailPage";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useEffect } from "react";
function App() {
  const [view, setView] = useState("dark");
  const location = useLocation();
  const auth = useContext(AuthContext);
  const theme = createTheme({palette: { mode: `${view}` }});

  // This effect runs every time the theme changes.
  useEffect(() => {
    // Apply the background color to the body of our document.
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);
  return (
    <MyContext.Provider value={{ view, setView }}> 
    <ThemeProvider theme={theme}>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <>
          {auth.user ? (
              <Route path="/job/:id" element={<JobDetailPage />}></Route>
            
          ) : (
              <Route path="/login" element={<Login />}></Route>
          )}
          </>
        </Route>
      </Routes>
    </ThemeProvider>
    </MyContext.Provider>
  );
}

export default App;
