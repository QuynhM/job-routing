import React from "react";
import JobDetailCard from "../components/JobDetailCard";
import Container from "@mui/material/Container";

import data from '../data/data.json'
import { useParams } from "react-router-dom";

function JobDetailPage() {
    let { id } = useParams();
    const job = data.find((job) => job.id === Number(id));

  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
         <JobDetailCard
                    title={job.title}
                    skills={job.skills}
                    city={job.city}
                    description={job.description}
                />
    </Container>
  );
}

export default JobDetailPage;
