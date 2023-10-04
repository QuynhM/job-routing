import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import SkillsPaper from "./SkillsPaper";
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(() => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  margin: "auto",
}));

function JobDetailCard({skills, title, city, description}) {

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
          <Typography
            variant="subtitle1"
            component="div"
          >
            {title}
          </Typography>
          <Divider />
          <SkillsPaper skills={skills} />
          <Typography>
            City: {city}
          </Typography>
          <Typography>
            Description: {description}
          </Typography>
        </CardContent>
      </Stack>
    </CardStyle>
  );
}

export default JobDetailCard;
