import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap
    justify-center gap-10">
      {technologies.map((tech) => (
        <div className="xs:w-28 md:w-28 xl:w-60 h-28"
        key={tech.name}
        >
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')