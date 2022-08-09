import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

const PictureCard = () => {
  return (
    <div className="p-5 shadow-2xl rounded-lg mb-10 md:mb-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <img
        src="https://avatars.githubusercontent.com/u/82976067?s=400&u=eec4fa824819e3b7af1b9010a433aa25f14a7271&v=4"
        alt="Me"
        className="w-full"
      />
      <div className="flex text-5xl items-center justify-center space-x-7 mt-5">
        <FaReact className="text-[#61dbfb]" />
        <FaNodeJs className="text-[#3c873a]" />
        <SiTypescript className="text-[#007acc]" />
      </div>
    </div>
  )
}

export default PictureCard
