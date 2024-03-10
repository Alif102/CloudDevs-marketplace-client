/* eslint-disable react/prop-types */

const JobList = ({data}) => {
  return (
    <div>
         <ul>
      {data.map((job) => (
        <li key={job.id}>
          {job.jobTitle} - {job.description}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default JobList