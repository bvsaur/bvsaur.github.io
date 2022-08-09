import { useTranslation } from 'react-i18next'

const Myself = () => {
  const { t } = useTranslation()

  return (
    <div className="border border-gray-500 rounded-lg overflow-hidden">
      <div className="bg-gray-300 w-full h-7 flex items-center space-x-2 px-3">
        <div className="h-2 w-2 rounded-full bg-red-500"></div>
        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
      </div>
      <div className="p-4 md:p-6">
        <p className="text-xl mb-4">{t('about.greeting')} 👋🏻</p>
        <p className="text-justify">{t('about.paragraph1')}</p>
        <br />
        <p className="text-justify">{t('about.paragraph2')}</p>
      </div>
    </div>
  )
}

export default Myself
