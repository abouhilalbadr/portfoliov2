import { useState } from "react";
import Person from "./Person";

const Carousel = ({ people }) => {
    const [active, setActive] = useState(0);

    return (
        <div className="py-10">
            {people.map(
                (person, index) =>
                    active === index && <Person person={person} key={index} />
            )}
            <div>
                <button
                    aria-label="Camille Larmanou"
                    className={
                        "inline-block mx-2 w-4 h-4 rounded-full border-2 cursor-pointer transition duration-500 ease-in-out " +
                        (active === 0
                            ? "bg-mainColor border-mainColor dark:bg-secondColor dark:border-secondColor"
                            : "border-gray")
                    }
                    onClick={() => setActive(0)}
                ></button>
                <button
                    aria-label="Lex Paulson"
                    className={
                        "inline-block mx-2 w-4 h-4 rounded-full border-2 cursor-pointer transition duration-500 ease-in-out " +
                        (active === 1
                            ? "bg-mainColor border-mainColor dark:bg-secondColor dark:border-secondColor"
                            : "border-gray")
                    }
                    onClick={() => setActive(1)}
                ></button>
            </div>
        </div>
    );
};

export default Carousel;
