import Link from "next/link";

import Project from "./helpers/Project";

const Projects = ({ projects, collaboration }) => {
  return (
    <section className="pt-20 pb-16 px-6 -mt-56">
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-wrap mb-20">
          {projects.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center text-center py-16">
          <h4 className="font-medium mb-6 text-2xl">{collaboration.title}</h4>
          <p className="font-light mb-12 text-lg">
            {collaboration.description}
          </p>
          <Link href="/conversation">
            <a className="border-2 border-mainColor py-3 px-8 text-mainColor rounded-full hover:bg-mainColor hover:text-white transition duration-500 ease-in-out tracking-wide text-lg">
              {collaboration.btn}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Projects;
