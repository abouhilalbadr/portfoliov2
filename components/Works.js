import Work from './helpers/Work'

import um6p from '../assets/work/um6p.webp'
import ecomfusion from '../assets/work/ecomfusion.webp'
import mylittlestore from '../assets/work/mylittlestore.webp'
import tantancours from '../assets/work/tantancours.webp'
import a4c from '../assets/work/a4c.webp'
import croar from '../assets/work/croar.webp'
import Github from './social/Github'

const Works = () => {
  const works = [
    { img: um6p, title: "UM6P School of Collective Intelligence", url: "https://sci.um6p.ma/" },
    { img: ecomfusion, title: "Ecom Fusion, Boost your business", url: "https://ecomfusion.fr/" },
    { img: mylittlestore, title: "My Little Store - Produits bébé - En ligne au Maroc", url: "https://mylittlestore.ma/" },
    { img: tantancours, title: "Tan Tan Cours, Tous cours tout court", url: "https://tantancours.com/" },
    { img: a4c, title: "Act4Community Jorf lasfar", url: "https://www.figma.com/proto/FX5UIQibBsZf4EJtDgMA4L/Act4Com?node-id=9%3A0" },
    { img: croar, title: "Conseil Régional de l'Ordre des Architectes", url: "https://www.figma.com/proto/04kPM8TKxbZBOMqIQuQCbx/CRRSZZ?node-id=95%3A131&starting-point-node-id=95%3A131" },
  ]
  return (
    <section className="py-16 lg:py-36 px-6">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-6">My Recent Work</h2>
        <p className="font-light text-lg">You can find here my latest works. Want to see more? <a target="_blank" className="text-mainColor" href="mailto:abouhilal.badr@gmail.com">
          Email me
        </a></p>
        <div className="flex flex-col lg:flex-row flex-wrap pt-16 lg:pt-28 pb-8 lg:pb-14">
          {works.map((work, index) => (
            <Work work={work} key={index} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <a href="https://github.com/abouhilalbadr" target="_blank" className="border-2 border-mainColor py-3 px-8 text-mainColor rounded-full hover:bg-mainColor hover:text-white transition duration-500 ease-in-out tracking-wide flex items-center">
          <Github />
          <span className="ml-4">See more on Github</span>
        </a>
      </div>
    </section>
  )
}

export default Works