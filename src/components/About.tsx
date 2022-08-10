import { useTranslation } from 'react-i18next'
import Myself from './Myself'
import PictureCard from './PictureCard'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-darkblue py-10 lg:py-16 w-full">
      <h2 className="text-center text-3xl uppercase mb-5 md:mb-16 font-bold text-ligthGray">
        {t('about.title')}
      </h2>
      <div className="block px-6 md:flex items-center md:space-x-10 lg:space-x-32 xl:space-x-48 justify-center w-full lg:w-3/4 mx-auto">
        <PictureCard />
        <Myself />
      </div>
    </div>
  )
}

export default About
