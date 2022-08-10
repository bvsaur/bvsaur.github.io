import { useTranslation } from 'react-i18next'
import Project from './Project'
import projectsData from '../data/projects.json'
import { IProyect } from '../interfaces'

const Projects = () => {
  const data = projectsData as IProyect[]
  const { t } = useTranslation()

  return (
    <div className="bg-darkblue p-10 lg:p-16">
      <h2 className="text-center text-3xl uppercase mb-5 md:mb-16 font-bold text-ligthGray">
        {t('projects.title')}
      </h2>
      <div className="flex flex-wrap justify-center">
        {data.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  )
}

export default Projects
