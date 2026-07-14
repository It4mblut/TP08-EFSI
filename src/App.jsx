import { useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Feed from './components/Feed.jsx'
import Usuario from './components/Usuario.jsx'
import PostDetallado from './components/PostDetallado.jsx'
import './App.css'

function App() {
    const [vistaActual, setVistaActual] = useState('feed')
    const [postSeleccionado, setPostSeleccionado] = useState(null)

    function abrirPost(post) {
        setPostSeleccionado(post)
        setVistaActual('post')
    }

    function volverAlFeed() {
        setPostSeleccionado(null)
        setVistaActual('feed')
    }

    return (
      <>
      <Header />
      <div className="app-body">
        <Sidebar setVistaActual={setVistaActual} />
        <main className="app-main">
          {vistaActual === 'feed' && <Feed abrirPost={abrirPost} />}
          {vistaActual === 'usuario' && <Usuario />}
          {vistaActual === 'post' && postSeleccionado && <PostDetallado post={postSeleccionado} onVolver={volverAlFeed} />}
        </main>
      </div>
    </>
    )
}

    export default App