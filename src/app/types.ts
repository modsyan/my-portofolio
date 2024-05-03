// interfaces.ts
interface HeaderData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

interface EducationData {
  institution: string;
  location: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
}

interface WorkHistoryData {
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

interface ProjectData {
  name: string;
  description: string;
  technologies: string[];
}

interface SkillData {
  technical: string[];
  frameworks: string[];
  databases: string[];
  ci_cd: string[];
  other: string[];
  soft: string[];
}

interface ExtracurricularData {
  activity: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface PortfolioData {
  header: HeaderData;
  careerSummary: string;
  education: EducationData[];
  workHistory: WorkHistoryData[];
  projects: ProjectData[];
  skills: SkillData;
  extracurriculars: ExtracurricularData[];
}

export type { HeaderData, EducationData, WorkHistoryData, ProjectData, SkillData, ExtracurricularData, PortfolioData };