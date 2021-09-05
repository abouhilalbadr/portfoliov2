import Nav from "./helpers/Nav"
import Hero from "./helpers/Hero"

const Header = ({ page }) => {
  return (
    <header className={(page === 'form' ? 'border-b-2 border-gray' : 'pt-4 lg:pt-6')}>
      <div className="container">
        <Nav page={page} />
        {page === "home" && <Hero />}
      </div>
    </header>
  )
}
export default Header