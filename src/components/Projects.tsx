import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-darkblue p-10 lg:p-16">
      <h2 className="text-center text-3xl uppercase mb-5 md:mb-16 font-bold text-ligthGray">
        {t('projects.title')}
      </h2>
      <div className="flex flex-wrap">
        <div className="bg-white p-5">
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
          <p>Title</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
