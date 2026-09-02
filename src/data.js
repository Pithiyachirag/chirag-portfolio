import { Code2 } from "lucide-react";
import { SiJavascript, SiReact, SiHtml5, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGit, SiGithub } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      ["JavaScript", SiJavascript], ["React.js", SiReact], ["HTML5", SiHtml5],
      ["CSS3", FaCss3Alt], ["Tailwind CSS", SiTailwindcss]
    ]
  },
  {
    title: "Backend",
    items: [
      ["Node.js", SiNodedotjs], ["Express.js", SiExpress], ["REST API", Code2]
    ]
  },
  {
    title: "Database & Tools",
    items: [
      ["MySQL", SiMysql], ["MongoDB", SiMongodb], ["Git", SiGit], ["GitHub", SiGithub]
    ]
  }
];

export const projects = [
  { title: "AI Code Reviewer Platform", short: "AI", featured: true, liveUrl: "https://ai-code-reviewer-coral-kappa.vercel.app", githubUrl: "https://github.com/Pithiyachirag", description: "A full-stack AI-powered code review application with code explanation, contextual AI chat, quality scoring, multi-language support, review history, analytics and report generation.", highlights: ["AI code review & explanation", "Contextual AI chat", "Review history & analytics", "Multi-language support"], tech: ["React.js", "Node.js", "Express.js", "Gemini AI", "Monaco Editor", "Tailwind CSS"] },
  { title: "React E-Commerce Web App", short: "EC", githubUrl: "https://github.com/Pithiyachirag", description: "Responsive e-commerce application with product listing, cart, authentication, LocalStorage and REST API data.", tech: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "REST API"] },
  { title: "Online Art Gallery", short: "AG", description: "A web platform to display and manage digital artworks.", tech: ["ASP.NET", "MySQL"] }
];
