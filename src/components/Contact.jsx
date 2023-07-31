import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

// template_0ajjn1u : TEMPLATE_ID
// service_hsiu91g : SERVICE_ID
// vNmY8jwBUKYwTsWNk : PUBLIC_KEY

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    // e.target is the input field
    // name is the name of the input field
    // Below is same as const { target } = e
    const { name, value } = e.target
    // ...form is the previous state, [name] is the input field
    // value is the value of the input field
    // [name]: value is the new state
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // formRef.current is the form data
    emailjs.sendForm( 
      "service_hsiu91g",
      "template_0ajjn1u",
      formRef.current,
      "vNmY8jwBUKYwTsWNk"
    ) .then((result) => {
      console.log(result.text)
      setLoading(false)
      alert("Thank you for your message, I will get back to you soon.")
      setForm({
        name: "",
        email: "",
        message: ""
      })
    }, (error) => {
      console.log(error.text)
      setLoading(false)
      alert ("An error occurred, please try again.")
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row
     flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      // left is the initial position, tween is the animation
      // 0.2 is the delay, 1 is the duration
        variants={slideIn("left", "tween", 0.2, 1)}
        // flex-[0.75] is 3/4 width of the parent or screen 
        className="flex-[0.75] bg-black-100 p-8
         rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          // ref purpose here is to get the form data 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* below is the name input */}
          <label className="flex flex-col">
            <span className="text-white
             font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange} 
              placeholder="What's your name?"
              // py is padding on y-axis, px is padding on x-axis
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-2xl outlined-none
              border-none font-medium"            
            >
            </input>
          </label>
          {/* below is the email input */}
          <label className="flex flex-col">
            <span className="text-white
             font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange} 
              placeholder="What's your email?"
              // py is padding on y-axis, px is padding on x-axis
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-2xl outlined-none
              border-none font-medium"            
            >
            </input>
          </label>
          {/* below is the message input */}
          <label className="flex flex-col">
            <span className="text-white
             font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange} 
              placeholder="What do you want to say?"
              // py is padding on y-axis, px is padding on x-axis
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-2xl outlined-none
              border-none font-medium"            
            >
            </textarea>
          </label>
          {/* below is the submit button */}
          <button
            type="submit"
            // w-fit purpose is to make the button width
            // fit the content
            className="bg-tertiary py-3 px-7
            outline-none w-fit text-white font-bold
            shadow-md rounded-2xl hover:bg-secondary
            hover:text-tertiary hover:font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Motion div for earth model */}
      <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto
      md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")