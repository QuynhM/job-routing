import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AuthContext from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import SkillsPaper from "./SkillsPaper";
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(() => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "300px",
  margin: "auto",
}));

function JobCard({ skills, id, title, description }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (event) => {
    if (auth.user) {
      navigate(`/job/${id}`);
    } else {
      navigate("/login", { state: { from: `/job/${id}` } });
    }
  };
  return (
    <CardStyle ariant="outlined">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px"
      >
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {title}
          </Typography>
          <Divider />
          <SkillsPaper skills={skills} />
          {/* <Typography>City: {city}</Typography> */}
          <Typography>{description}</Typography>
        </CardContent>

        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ width: "130px", marginBottom: "20px" }}
        >
          Learn More
        </Button>
      </Stack>
    </CardStyle>
  );
}

export default JobCard;
