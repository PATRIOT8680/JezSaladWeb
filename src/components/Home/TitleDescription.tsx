import React from "react"

import './styles/compiled-css/TitleDescription.css'

interface IDescription {
  children: string
}

const TitleDescription: React.FC<IDescription> = ({ children }) => {
  return(
    <>
      <span className="description">{children}</span>
    </>
  )
}

export default TitleDescription