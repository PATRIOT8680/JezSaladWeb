import React from "react"
import './styles/compiled-css/Button.css'

interface ButtonProps {
  onClick?: () => void
  children: string
  title?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, children, title, disabled = false }) => {
  return(
    <button className="btnMain" onClick={onClick} title={title} disabled={disabled}>{children}</button>
  )
}

export default Button