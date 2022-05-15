import Work from "./helpers/Work";
import Github from "./social/Github";

const Works = ({ works }) => {
    return (
        <section className="py-16 lg:py-36 px-6">
            <div className="container text-center">
                <h2 className="text-4xl font-bold mb-6">{works.title}</h2>
                <p className="font-light text-lg">
                    {works.description + " "}
                    <a
                        target="_blank"
                        className="text-mainColor"
                        href={`mailto:${works.email.address}`}
                    >
                        {works.email.text}
                    </a>
                </p>
                <div className="flex flex-col lg:flex-row flex-wrap pt-16 lg:pt-28 pb-8 lg:pb-14">
                    {works.items.map((work, index) => (
                        <Work work={work} key={index} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <a
                    href={works.github.url}
                    target="_blank"
                    className="border-2 border-mainColor py-3 px-8 text-mainColor rounded-full hover:bg-mainColor hover:text-white transition duration-500 ease-in-out tracking-wide flex items-center dark:text-white dark:bg-secondColor dark:border-secondColor"
                >
                    <Github />
                    <span className="ml-4">{works.github.text}</span>
                </a>
            </div>
        </section>
    );
};

export default Works;
