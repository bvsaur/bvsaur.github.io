import { useTranslation } from 'react-i18next'

interface Props {
  lang: 'es' | 'en'
}

const LangButton = ({ lang }: Props) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation()

  const languages = {
    es: {
      label: 'Español',
    },
    en: {
      label: 'English',
    },
  }

  const onClick = (lng: 'es' | 'en') => {
    changeLanguage(lng)
  }

  return (
    <button
      className={`px-5 py-2 rounded-full w-28 md:text-xl md:w-32 ${
        language === lang
          ? 'bg-brightOrange text-darkblue'
          : 'bg-ligthGray bg-opacity-40 text-ligthGray hover:animate-pulse '
      }`}
      onClick={() => onClick(lang)}
    >
      {languages[lang].label}
    </button>
  )
}

export default LangButton
