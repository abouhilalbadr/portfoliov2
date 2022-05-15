import Link from "next/link";

import Logo from "./Logo";

const Nav = ({ page, header, colorTheme, setTheme }) => {
    return (
        <nav className="flex flex-wrap justify-between items-center px-4 py-4 lg:px-0 lg:py-7 text-mainColor dark:text-white">
            <Logo />
            {page === "home" && (
                <div className="flex items-center space-x-10">
                    {colorTheme === "light" ? (
                        <button onClick={() => setTheme("light")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        </button>
                    ) : (
                        <button onClick={() => setTheme("dark")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        </button>
                    )}
                    <a
                        target="_blank"
                        className="font-light hover:text-mainColor text-black dark:text-white"
                        href={`mailto:${header.email.address}`}
                    >
                        {header.email.text}
                    </a>
                    <Link href="/contact">
                        <a className="border-2 border-mainColor py-2 px-6 text-mainColor rounded-full hover:bg-mainColor hover:text-white transition duration-500 ease-in-out tracking-wide dark:text-white dark:bg-secondColor dark:border-secondColor">
                            {header.contact}
                        </a>
                    </Link>
                </div>
            )}

            {page === "form" && (
                <div className="flex items-center">
                    <Link href="/">
                        <a className="text-mainColor">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                width="24"
                                height="24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"
                                ></path>
                            </svg>
                        </a>
                    </Link>
                </div>
            )}
        </nav>
    );
};
export default Nav;
