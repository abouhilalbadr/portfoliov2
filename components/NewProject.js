import Link from "next/link";

const NewProject = ({ newProject }) => {
    return (
        <section className="bg-mainColor dark:bg-secondColor text-white px-6 py-20 text-center">
            <div className="container">
                <div className="py-14 px-5 bg-secondColor dark:bg-mainColor shadow-lg -mt-36 rounded-xl">
                    <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between">
                        <div className="flex-grow flex-shrink flex-basis p-3">
                            <h3 className="font-bold text-3xl">
                                {newProject.title}
                            </h3>
                        </div>
                        <div className="flex-grow flex-shrink flex-basis p-3 mb-4 lg:mb-0">
                            <p className="text-lg font-thin">
                                {newProject.description}
                            </p>
                        </div>
                        <div className="flex-grow flex-shrink flex-basis p-3">
                            <Link href="/project">
                                <a className="border-2 border-mainColor dark:border-secondColor py-4 px-10 text-white rounded-full hover:bg-mainColor dark:hover:bg-secondColor transition duration-500 ease-in-out tracking-wide text-xl font-thin">
                                    {newProject.btn}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewProject;
