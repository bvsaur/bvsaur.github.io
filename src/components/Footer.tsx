import { SiGithub, SiLinkedin } from 'react-icons/si'

const Footer = () => {
  return (
    <div className="bg-darkblue py-10 text-center">
      <div className="flex justify-center text-ligthGray text-4xl space-x-7">
        <a
          href="https://github.com/bvsaur"
          rel="nonreferrer noopener"
          target="blank"
        >
          <SiGithub />
        </a>
        <a
          href="https://linkedin.com/in/bveranoc"
          rel="nonreferrer noopener"
          target="blank"
        >
          <SiLinkedin />
        </a>
      </div>
      <p className="text-ligthGray mt-5">Copyright @ Bruno Verano</p>
    </div>
  )
}

export default Footer
