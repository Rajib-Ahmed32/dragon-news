import CareerIntro from "../components/CareerIntro";
import JobList from "../components/JobList";
import CultureSection from "../components/CultureSection";
import CareerContactForm from "../components/CareerContactForm";
import Navbar from "../components/Navbar";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    description: "React, Tailwind, Vite experience preferred.",
    link: "/apply/frontend-developer",
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "Dhaka Office",
    description: "Node.js, Express, and MongoDB stack.",
    link: "/apply/backend-engineer",
  },
];

const CareerPage = () => {
  return (
    <div className="w-11/12 max-w-5xl mx-auto py-8">
      <header>
        <Navbar />
      </header>
      <div className="">
        <CareerIntro />
        <JobList jobs={jobs} />
        <CultureSection />
        <CareerContactForm />
      </div>
    </div>
  );
};

export default CareerPage;
