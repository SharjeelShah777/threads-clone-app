import React from "react"
import PopupThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = () => {
  return (
    <div className='popup'>
      <PopupThread/>
      <ThreadInput/>
    </div>
  )
}

export default PopUp