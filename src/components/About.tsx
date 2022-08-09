import Myself from './Myself'
import PictureCard from './PictureCard'

const About = () => {
  return (
    <div className="bg-ligthGray p-10 lg:p-16">
      <h2 className="text-center text-3xl uppercase mb-5 md:mb-16 font-bold">
        About me
      </h2>
      <div className="block md:flex items-center md:space-x-10 lg:space-x-32 xl:space-x-48 justify-center w-full lg:w-3/4 mx-auto">
        <PictureCard />
        <Myself />
      </div>
    </div>
  )
}

export default About
