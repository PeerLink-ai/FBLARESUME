import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Jane Smith",
    summary:
      "Full-stack developer with a passion for creating user-friendly, high-performance web applications",
    email: "contact@janesmith.com",
    phone: "987-654-3210",
    location: "San Francisco, CA",
    url: "linkedin.com/in/jane-smith",
  },
  workExperiences: [
    {
      company: "TechCorp Solutions",
      jobTitle: "Full-Stack Developer",
      date: "June 2023 - Present",
      descriptions: [
        "Spearheaded development of a collaborative workspace feature, boosting user engagement by 30%",
        "Designed and implemented reusable UI components, improving development speed by 25%",
        "Ensured robust unit testing and code reviews, maintaining a 98% code coverage rate",
      ],
    },
    {
      company: "Innovate Labs",
      jobTitle: "Software Engineer Intern",
      date: "Summer 2022",
      descriptions: [
        "Optimized database queries, leading to a 15% reduction in API response times",
        "Developed a custom analytics dashboard that increased team efficiency by 20%",
        "Fixed critical security vulnerabilities in the system, enhancing data protection",
      ],
    },
    {
      company: "Tech University",
      jobTitle: "Teaching Assistant",
      date: "Fall 2021 - Spring 2022",
      descriptions: [
        "Assisted in teaching data structures and algorithms, helping students achieve a 10% higher average score",
        "Led weekly coding sessions for a class of 50 students, covering advanced algorithmic concepts",
      ],
    },
  ],
  educations: [
    {
      school: "Tech University",
      degree: "Bachelor of Science in Software Engineering",
      date: "Sep 2018 - May 2022",
      gpa: "3.9",
      descriptions: [
        "First-place winner of 2021 Software Design Challenge, finalist in 2022 AI Development Contest",
        "Research assistant in the Advanced Computing Lab (2020 - 2021)",
        "Coursework: Data Structures (A), Algorithms (A), Software Design (A), AI Programming (A-)",
      ],
    },
  ],
  projects: [
    {
      project: "DevPortfolio",
      date: "Spring 2022",
      descriptions: [
        "Built and launched a portfolio website generator, used by hundreds of developers to showcase their work",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "JavaScript", rating: 4 },
      { skill: "HTML", rating: 4 },
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
      { skill: "Java", rating: 2 },
    ],
    descriptions: [
      "Tech: Node.js, Express, MongoDB, Docker, AWS, Git, REST APIs, GraphQL",
      "Soft: Problem-Solving, Collaboration, Leadership, Time Management, Adaptability",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
