import jobs from "./jobs.json";

async function getJobs(page, q = null) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  await promise;

  if (q) {
    let filtedJobs = jobs.filter(
      (job) =>
        job.title.includes(q) ||
        job.description.includes(q) ||
        job.city.includes(q) ||
        job.skills.some((skill) => skill.includes(q))
    );
    return { jobs: filtedJobs, pagesTotal: 1 };
  } else {
    // Calculate total pages based on all jobs and the number of jobs per page
    const jobsPerPage = 5;
    const pagesTotal = Math.ceil(jobs.length / jobsPerPage);

    // Slice the jobs based on the requested page
    const startIndex = (page - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;

    return { jobs: jobs.slice(startIndex, endIndex), pagesTotal };
  }
}

async function getJob(id) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;

  return jobs.find((job) => job.id === id);
}

export default { getJobs, getJob };
