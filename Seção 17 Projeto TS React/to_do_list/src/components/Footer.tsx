import React from 'react'
import syle from "./Footer.module.css"



const Footer = () => {
  return (
    <div>
        <footer className={syle.footer}>
        <p>
          <span >React + TS Todo</span>@2022
        </p>
      </footer>
    </div>
  )
}

export default Footer