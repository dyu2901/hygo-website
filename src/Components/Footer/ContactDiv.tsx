import React from "react"
import SocialsDiv from "../Socials/SocialsDiv"
import Input from "../UI/Input"

const ContactDiv = () => {
  return (
    <div className="max-w-[400px]">
      <p className="text-sm font-bold mb-2">Have Something To Talk About With Our Professionals?</p>
      <div className="-mt-1">
        <Input placeholder="Your Email" />
      </div>
      <div className="-mt-2">
        <SocialsDiv />
      </div>
    </div>
  )
}

export default ContactDiv
