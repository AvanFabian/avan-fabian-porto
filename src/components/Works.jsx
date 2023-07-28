import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


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
        <motion.p>
        
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')