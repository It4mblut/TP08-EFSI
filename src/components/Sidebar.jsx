import { IoHomeOutline, IoCompassOutline, IoVideocamOutline, IoTvOutline, IoNotificationsOutline } from 'react-icons/io5'
import { IoPersonOutline, IoHeartOutline } from 'react-icons/io5'
import './Sidebar.css'

function Sidebar({ setVistaActual }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-perfil" onClick={() => setVistaActual('usuario')}>
        <img src="https://fotografias-atreseries.atresmedia.com/clipping/cmsimages02/2018/06/06/54229044-BF06-42B7-A62E-AC06B1348713/70.jpg?crop=1574,885,x0,y42&width=480&height=270&optimize=high&format=webply" alt="perfil" className="sidebar-fotoPerfil" />
        <div>
          <p className="sidebar-nombre">Juan López</p>
          <p className="sidebar-arroba">@juancito.loPz</p>
        </div>
      </div>

      <div className="sidebar-seguidores">
        <button><IoPersonOutline /> {1.3}K</button>
        <button><IoHeartOutline /> {300}K</button>
      </div>

      <nav className="sidebar-opciones">
        <button onClick={() => setVistaActual('feed')}><IoHomeOutline /> Home</button>
        <button><IoCompassOutline /> Explore</button>
        <button><IoVideocamOutline /> Reels</button>
        <button><IoTvOutline /> IGTV</button>
        <button><IoNotificationsOutline /> Notificaciones</button>
      </nav>
    </aside>
  )
}

export default Sidebar