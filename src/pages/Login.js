import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let destination = location?.state?.from || "/" ;
  return (
    <Stack sx={{ p: 4, alignItems: "center" }}>
      <LoginForm
        callback={() => {
          navigate(destination);
        }}
      />
    </Stack>
  );
}

export default Login;
