import React from "react"
import { BsInstagram, BsLinkedin } from "react-icons/bs"
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="https://www.linkedin.com/company/blue-sapphire-health-solution" rel="noreferrer">
        <BsLinkedin />
      </a>
      {/* <a target="_blank" href="#">
         <BsFacebook />
         </a> */}
      <a target="_blank" href="https://www.instagram.com/hygohealthcare/" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  )
}

export default SocialsDiv
