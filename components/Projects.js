import Link from "next/link"

import Project from "./helpers/Project"

const Projects = () => {
  const projects = [
    { title: "PDF Watermark", desc: "Add image watermark & add or edit the first page of your PDF documents.", url: "https://github.com/abouhilalbadr/pdf-watermark", status: "Beta Version" },
    { title: "Cloudy Recorder", desc: "Capture and share footage directly from your desktop with Cloudy's free screen recorder.", url: false, status: "In development" },
    { title: "Talker Chat Video & Audio", desc: "Manage your Video, chat & voice chat with Talker easly and securely.", url: false, status: "In development" },
  ]
  return (
    <section className="pt-20 pb-16 px-6 -mt-56">
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-wrap mb-20">
          {projects.map((e, i) => (
            <Project project={e} key={i} />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center text-center py-16">
          <h4 className="font-medium mb-6 text-2xl">Interested in collaborating or investing?</h4>
          <p className="font-light mb-12 text-lg">I’m always open to discussing product design work or partnership opportunities.</p>
          <Link href="/conversation">
            <a className="border-2 border-mainColor py-3 px-8 text-mainColor rounded-full hover:bg-mainColor hover:text-white transition duration-500 ease-in-out tracking-wide text-lg">
              Start a conversation
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Projects