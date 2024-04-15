import { badgeClass } from "../../Utils/config/badge.style"

function Badge({text, variant="success"}) {
  return (
    <div className={`${badgeClass[variant]}`}>{text}</div>
  )
}

export default Badge