import { useTranslation } from 'react-i18next'
import LangButton from './LangButton'
import SocialLink from './SocialLink'
import Typewriter from './Typewriter'

const Head = () => {
  const { t } = useTranslation()

  return (
    <div className="h-screen bg-darkblue text-brightOrange flex items-center justify-center relative overflow-hidden">
      <div className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl">{t('head.title')}</h1>
        <div className="h-8">
          <Typewriter />
        </div>
        <div className="flex text-5xl text-ligthGray justify-center my-5 md:text-6xl">
          <SocialLink provider="github" />
          <SocialLink provider="linkedin" />
        </div>
      </div>
      <div className="absolute bottom-0 p-10 text-center">
        <div className="space-x-5">
          <LangButton lang="en" />
          <LangButton lang="es" />
        </div>
      </div>
      <div className="absolute p-5 w-96 h-96 rounded-full -top-48 -left-48 bg-brightOrange"></div>
      <div className="hidden md:block absolute p-5 w-96 h-96 rounded-full -bottom-48 -right-48 bg-brightOrange"></div>
    </div>
  )
}

export default Head
