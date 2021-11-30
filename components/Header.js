import Nav from "./helpers/Nav";
import Hero from "./helpers/Hero";

const Header = ({ page, header, hero }) => {
  return (
    <header
      className={page === "form" ? "border-b-2 border-gray" : "pt-4 lg:pt-6"}
    >
      <div className="container">
        <Nav page={page} header={header} />
        {page === "home" && <Hero hero={hero} />}
      </div>
    </header>
  );
};
export default Header;
