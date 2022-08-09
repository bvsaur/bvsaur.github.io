import { default as TW } from 'typewriter-effect'

const Typewriter = () => {
  return (
    <TW
      onInit={(tw) => {
        tw.typeString(
          `<span class="text-xl md:text-2xl">Fullstack Developer</span>`
        )
          .deleteAll()
          .typeString(
            '<span class="text-xl md:text-2xl">Automation specialist</span>'
          )
          .deleteAll()
          .start()
      }}
      options={{
        loop: true,
      }}
    />
  )
}

export default Typewriter
