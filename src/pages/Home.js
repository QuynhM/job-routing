import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import data from "../data/data.json";
import { styled } from "@mui/material/styles";
import { useLocation, useSearchParams } from "react-router-dom";

const PaginationStyle = styled(Pagination)(() => ({
  color: "white",
  marginBottom: "7px",
  justifyContent: "center",
  display: "flex",
}));

// A custom hook that builds on useLocation to parse

// the query string for you.

function useQuery() {
  const { search } = useLocation();
  console.log("Search:", search);

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Home() {
  const jobsPerPage = 5;
  const totalPages = Math.ceil(data.length / jobsPerPage);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  let query = useQuery();

  // Filter jobs based on search term

  useEffect(() => {
    const search = query.get("q");
    console.log(query);
    console.log("GET: ", searchParams.get("q"));

    let filteredJobs = data;
    if (search) {
      filteredJobs = filteredJobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    setJobs(filteredJobs.slice(start, end));
  }, [currentPage, query]);

  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid key={job.id} item md={4} sm={6} xs={12}>
            <JobCard
              id={job.id}
              title={job.title}
              skills={job.skills}
              description={job.description}
            />
          </Grid>
        ))}
      </Grid>
      <PaginationStyle
        count={totalPages}
        onChange={(event, value) => {
          setCurrentPage(value);
        }}
        sx={{ marginTop: "40px" }}
      />
    </Container>
  );
}

export default Home;
