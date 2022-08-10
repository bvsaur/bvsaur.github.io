import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

const PictureCard = () => {
  return (
    <div className="p-5 shadow-xl shadow-gray-700 rounded-lg mb-10 md:mb-0 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white">
      <div className="rounded-lg overflow-hidden">
        {' '}
        <img
          src="https://res.cloudinary.com/dnvdrksxu/image/upload/v1660158444/portfolio/me_uht3fg.webp"
          alt="Me"
          className="w-full"
        />
      </div>
      <div className="flex text-5xl items-center justify-center space-x-7 mt-5">
        <FaReact className="text-[#61dbfb]" />
        <FaNodeJs className="text-[#3c873a]" />
        <SiTypescript className="text-[#007acc]" />
      </div>
    </div>
  )
}

export default PictureCard
