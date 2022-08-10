import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { IProyect } from '../interfaces'

interface Context {
  isOpen: boolean
  project: IProyect | undefined
  openModal: () => void
  closeModal: () => void
  setProject: Dispatch<SetStateAction<IProyect | undefined>>
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ModalContext = createContext<Context>({} as Context)

const ModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [project, setProject] = useState<IProyect>()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, project, setProject, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
