import Header from "./components/header";
import CareerSummary from "./components/career-summary";
import Education from "./components/education";
import Extracurriculars from "./components/extracurriculars";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Skills from "./components/skills";
import WorkHistory from "./components/work-history";
import data from './data.json'; // Importing data from JSON file


const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Header data={data.header} />
      <CareerSummary summary={data.careerSummary} />
      <Education data={data.education} />
      <WorkHistory data={data.workHistory} />
      <Projects data={data.projects} />
      <Skills data={data.skills} />
      <Extracurriculars data={data.extracurriculars} />
      <Footer />
    </div>
  );
}

export default Home;