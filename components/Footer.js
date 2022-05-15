import Logo from "./helpers/Logo";
import Github from "./social/Github";
import Gitlab from "./social/Gitlab";
import Twitter from "./social/Twitter";
import Linkedin from "./social/Linkedin";

const Footer = () => {
    const social = [
        {
            logo: <Linkedin />,
            url: "https://www.linkedin.com/in/badr-abouhilal-201774b0/",
        },
        { logo: <Twitter />, url: "https://twitter.com/AbouhilalBadr" },
        { logo: <Github />, url: "https://github.com/abouhilalbadr" },
        { logo: <Gitlab />, url: "https://gitlab.com/abouhilalbadr" },
    ];
    return (
        <footer className="bg-mainColor dark:bg-secondColor pt-4 px-6 pb-16 text-white text-center">
            <div className="container">
                <div className="flex flex-col items-center">
                    <Logo />
                    <div className="flex justify-center mt-6">
                        <h4 className="font-thin text-2xl leading-normal capitalize">
                            First, solve the problem.<br></br>Then, write the
                            code.
                        </h4>
                    </div>
                    <div className="flex my-8">
                        {social.map((e, i) => (
                            <a
                                className="h-12 w-12 flex items-center justify-center rounded-full border border-white border-opacity-30 hover:bg-white hover:text-mainColor mx-4 transition duration-500 ease-in-out"
                                href={e.url}
                                key={i}
                            >
                                {e.logo}
                            </a>
                        ))}
                    </div>
                    <p className="flex items-center font-thin">
                        made with{" "}
                        <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            stroke="currentColor"
                            strokeWidth="0"
                            fill="red"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-1"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>{" "}
                        and TailwindCSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
