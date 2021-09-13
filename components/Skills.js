import iconDesigner from '../assets/designer.svg'
import iconFront from '../assets/front.svg'
import iconBackend from '../assets/backend.svg'
import Skill from './helpers/Skill'

const Skills = () => {
  const skills = [
    {
      img: iconDesigner,
      title: "Designer",
      desc: "I love to work in UI & UX designing and try my best to make the best UI with good UX.",
      more: {
        title: "Things I enjoy designing:",
        languages: ["UX", "UI", "Web Apps", "Mobile Apps", "Desktop Apps"]
      },
      tools: {
        title: "Design Tools:",
        tools: ["Figma", "Pen & Paper", "Sketch", "Zeplin", "Invision", "Webflow"]
      }
    },
    {
      img: iconFront,
      title: "Front-end Developer",
      desc: "Take my design and make it alive is one of the happiest things that front-end development give me.",
      more: {
        title: "Languages & Frameworks:",
        languages: ["HTML", "CSS", "JavaScript", "TypeScript", "JQuery", "VueJS", "ReactJS", "Sass", "PostCSS", "Pug", "JSX"]
      },
      tools: {
        title: "Front-end Tools:",
        tools:["VSCode", "Github", "Gitlab", "Bitbucket", "Codepen", "Terminal", "TailwindCSS", "Bootstrap"]
      }
    },
    {
      img: iconBackend,
      title: "Backend-Developer",
      desc: "Architect websites, secure it and make connection with databases it's like making tactical war strategies.",
      more: {
        title: "Languages & Frameworks:",
        languages: ["NodeJS", "Python", "PHP", "ExpressJS", "Django", "Laravel", "Wordpress", "MySQL", "PostgreSQL", "MongoDB"]
      },
      tools: {
        title: "Back-end Tools:",
        tools: ["TablePlus", "DBngin", "Firebase", "Nginx", "Apache", "Jira", "Postman", "Kubernetes", "Docker"]
      }
    }
  ]
  return (
    <section className="pt-20 pb-4 px-6 -mt-56">
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-wrap rounded-xl shadow-lg bg-white border border-gray">
          {skills.map((e, i) => (
            <Skill skill={e} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
