import { IoSettingsOutline } from 'react-icons/io5'
import { IoCameraOutline } from 'react-icons/io5'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span>Instagram</span>
      </div>

      <div className="header-search">
        <input type="text" placeholder="Buscar" />
      </div>

      <div className="header-icons">
        <button><IoSettingsOutline /></button>
        <button><IoCameraOutline /></button>
        <button><IoPaperPlaneOutline /></button>
        <button className="header-newpost">+ New Post</button>
      </div>
    </header>
  )
}
export default Header
