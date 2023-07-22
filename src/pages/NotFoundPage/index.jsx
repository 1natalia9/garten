import React from 'react'
import image from "./404.png"

export default function NotFoundPage() {
    const style = {
        backgroundImage: `url("${image}")`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"}
  return (
    <div style={style}>

    </div>
  )
}

