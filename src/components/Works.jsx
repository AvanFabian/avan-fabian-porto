import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ( {index, name, description,
tags, image, source_code_link} ) => {
  return (
    <motion.div variants={fadeIn("up", "spring",
     index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl
        sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        </div>
        {/* We want something to be appear on top of the image  */}
        <div className="absolute inset-0 flex
        justify-end m-3 card-img_hover">
          {/* BELOW IS FOR GITHUB LINK */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full
            flex justify-center mr-2 items-center cursor-pointer"
          >
            <img 
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          {/* BELOW IS FOR LIVE DEMO LINK */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer"
          >
            <img 
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        {/* BELOW IS FOR NAME AND DESCRIPTION OF THE PROJECT */}
        <div className="mt-5">
          <h3 className="text-white font-bold
          text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary
          text-[14px]">{description}</p>
        </div>

        {/* BELOW IS FOR TECH STACK */}
        <div className="mt-4 flex flex-wrap gap-2">
          {/* Map the tags */}
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px]
            ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )  

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          My Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
        // The 2 empty "", it's the direction of transition
        // 0.1 is the animation delay and 1 is the duration
          variants={fadeIn("", "", 0.1, 1)}
          // max-w-3xl is the max width of the text
          className="mt-3 text-secondary text-[17px]
           max-w-3xl leading-[30px]"
        >
          As a student, I am eager to learn and grow in the field of web development.&nbsp;
          I am excited to bring my creativity and problem-solving skills to real-world projects.&nbsp;
          Throughout my university studies, I have gained a strong foundation in computer science,&nbsp;
          programming languages, and software development methodologies, 
          which I apply to every project I undertake.&nbsp;
          <span className="text-white font-black">
            Click the Play icon to demo!
          </span>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          // index result is: 0, 1, 2, 3, 4, 5
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              // {...project} is the same as:
              // name={project.name}, image={project.image}, etc.
              {...project}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')