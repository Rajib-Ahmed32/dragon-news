const jobs = [
  {
    id: 1,
    title: "Political Reporter",
    type: "Full-time",
    location: "Remote",
    summary:
      "Cover national and international political developments with accuracy and integrity.",
  },
  {
    id: 2,
    title: "Copy Editor",
    type: "Part-time",
    location: "Dhaka Office",
    summary:
      "Ensure grammatical precision and AP-style consistency across articles.",
  },
];

const JobList = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Open Positions
    </h2>
    <div className="space-y-6">
      {jobs.map((job) => (
        <div key={job.id} className="p-4 border rounded-md shadow-sm">
          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-500">
            {job.type} · {job.location}
          </p>
          <p className="text-gray-700 mt-2">{job.summary}</p>
          <button className="mt-3 bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default JobList;
