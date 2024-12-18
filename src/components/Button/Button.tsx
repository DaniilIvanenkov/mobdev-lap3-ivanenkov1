import { PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
  onClick?:()=> void,
  className?: string
}

const Button = ({ children, onClick , className}: IButtonProps) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default Button
