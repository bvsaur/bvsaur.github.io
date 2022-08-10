import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      href: 'https://www.javascript.com',
      Component: <SiJavascript />,
    },
    {
      href: 'https://reactjs.org',
      Component: <SiReact />,
    },
    {
      href: 'https://www.typescriptlang.org',
      Component: <SiTypescript />,
    },
    {
      href: 'https://nodejs.org',
      Component: <SiNodedotjs />,
    },
    {
      href: 'https://www.mongodb.com',
      Component: <SiMongodb />,
    },
    {
      href: 'https://www.postgresql.org/',
      Component: <SiPostgresql />,
    },
    {
      href: 'https://www.docker.com/',
      Component: <SiDocker />,
    },
  ]
  return (
    <div className="bg-darkblue p-10 lg:p-16">
      <h2 className="text-center text-3xl uppercase mb-5 md:mb-16 font-bold text-brightOrange">
        Skills
      </h2>
      <div className="flex flex-wrap w-2/3 justify-center mx-auto xl:justify-between">
        {skills.map(({ href, Component }) => (
          <div className="bg-ligthGray p-4 text-5xl md:text-7xl md:m-4 rounded-lg hover:animate-pulse m-2 lg:m-2">
            <a href={href} rel="nonreferrer noopener" target="blank">
              {Component}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
