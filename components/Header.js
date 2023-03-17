import Nav from "./helpers/Nav";
import Hero from "./helpers/Hero";

import UseDarkMode from "./helpers/UseDarkMode";

const Header = ({ page, header, hero }) => {
    const [colorTheme, setTheme] = UseDarkMode();
    return (
        <header
            className={
                page === "form" ? "border-b-2 border-gray" : "pt-4 lg:pt-6 px-2"
            }
        >
            <div className="container">
                <Nav
                    page={page}
                    header={header}
                    colorTheme={colorTheme}
                    setTheme={setTheme}
                />
                {page === "home" && (
                    <Hero hero={hero} colorTheme={colorTheme} />
                )}
            </div>
        </header>
    );
};
export default Header;
