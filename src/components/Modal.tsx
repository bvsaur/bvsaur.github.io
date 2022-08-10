import { Dialog, Transition } from '@headlessui/react'
import { RiExternalLinkLine } from 'react-icons/ri'
import { Fragment, useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Icon } from '../helpers'
import { useTranslation } from 'react-i18next'

const Modal = () => {
  const { isOpen, closeModal, project } = useContext(ModalContext)
  const { t } = useTranslation()

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900 text-center"
                  >
                    <Swiper
                      className="rounded-lg overflow-hidden"
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                    >
                      <SwiperSlide>
                        <img
                          src={project?.mainImg}
                          alt=""
                          className="object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={project?.secondaryImg}
                          alt=""
                          className="object-cover min-h-full min-w-full w-auto h-auto"
                        />
                      </SwiperSlide>
                    </Swiper>
                    <a
                      href={`https://${project?.title}`}
                      rel="nonreferrer noopenner"
                      target="blank"
                      className="flex items-center justify-center outline-none mt-2 hover:text-brightOrange transition-colors"
                    >
                      {project?.title}
                      <RiExternalLinkLine className="ml-1" />
                    </a>
                  </Dialog.Title>
                  <div className="my-3">
                    <p className="text-sm text-gray-500 text-justify">
                      {t(`projects.description.${project?.title}`)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between px-20 md:text-4xl text-darkblue">
                    {project?.techStack.map(({ iconName }) => (
                      <Icon iconName={iconName} key={iconName} />
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
