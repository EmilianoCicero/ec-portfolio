import '../styles/Header.css'
import avatar from '../images/ec-avatar.png'

export default function Header() {
    return (
      <aside className="header">
        <img src={avatar} alt="Emi's Avatar" className="avatar" />
        <h1>Hola,<br/>I'm Emi</h1>
        <div className="divider"></div>
        <h2>Senior Product Designer & Design System Expert</h2>
      </aside>
    )
  }