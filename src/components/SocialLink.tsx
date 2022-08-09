import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

interface Props {
  provider: 'linkedin' | 'github'
}

const SocialLink = ({ provider }: Props) => {
  const providers = {
    github: {
      href: 'https://github.com/bvsaur',
      Component: <FaGithubSquare />,
    },
    linkedin: {
      href: 'https://linkedin.com/in/bveranoc',
      Component: <FaLinkedin />,
    },
  }

  return (
    <a
      href={providers[provider].href}
      rel="nonreferrer noopener"
      target="blank"
      className="p-3 hover:animate-pulse"
    >
      {providers[provider].Component}
    </a>
  )
}

export default SocialLink
