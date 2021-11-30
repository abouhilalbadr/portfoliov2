import InDev from "./InDev";

const Project = ({ project, ...extra }) => {
  let button;
  if (project.link.text === "In development") {
    button = (
      <button className="flex items-center text-mainColor opacity-50 cursor-not-allowed">
        <InDev />
        <span className="ml-2">{project.link.text}</span>
      </button>
    );
  } else {
    button = (
      <a
        className="inline-flex items-center text-mainColor"
        href={project.link.url}
      >
        {project.link.text}
      </a>
    );
  }
  return (
    <div className="w-full lg:w-1/3" {...extra}>
      <div className="bg-white m-3 rounded-xl border border-gray px-10 py-8 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="font-light mb-4">{project.description}</p>
        {button}
      </div>
    </div>
  );
};

export default Project;
