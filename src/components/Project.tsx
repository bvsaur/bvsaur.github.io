import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { IProyect } from '../interfaces'

interface Props {
  project: IProyect
}

const Project = ({ project }: Props) => {
  const { openModal, setProject } = useContext(ModalContext)
  const onClick = () => {
    setProject(project)
    openModal()
  }

  return (
    <div
      className="bg-white p-5 my-3 rounded-lg w-full md:w-1/2 lg:w-1/4 lg:mx-4 mx-1 text-center hover:shadow-2xl hover:shadow-gray-500 cursor-pointer hover:-translate-y-2 transition-all"
      onClick={onClick}
    >
      <div className="rounded-lg overflow-hidden">
        <img src={project.mainImg} alt={project.title} />
      </div>
      <p className="text-xl font-bold mt-3">{project.title}</p>
    </div>
  )
}

export default Project
