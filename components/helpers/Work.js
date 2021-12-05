import Image from "next/image";
import { useState } from "react";

const Work = ({ work, ...extra }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full lg:w-1/3" {...extra}>
      <div
        className="relative m-3 h-64 rounded-xl hover:shadow-xl transition duration-500 ease-in-out"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Image
          className="rounded-xl"
          src={work.image}
          alt={work.title}
          layout="fill"
          objectFit="cover"
        />
        <div
          className={
            "px-8 flex flex-col justify-center items-center text-white w-full h-full absolute top-0 left-0 bg-secondColor rounded-xl transition duration-500 ease-in-out transform " +
            (show ? "scale-100" : "scale-0")
          }
        >
          <h3 className="text-2xl font-medium mb-7 leading-tight">
            {work.title}
          </h3>
          <a
            className="border border-white px-6 py-2 rounded-full hover:bg-mainColor hover:text-white hover:border-mainColor transition duration-500 ease-in-out"
            target="_blank"
            href={work.url}
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
