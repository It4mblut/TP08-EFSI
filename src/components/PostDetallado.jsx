import { useState } from 'react'
import './PostDEtallado.css'
import { IoHeartOutline, IoHeart, IoChatbubbleOutline, IoPaperPlaneOutline } from 'react-icons/io5'

function PostDetallado({ post, onVolver }) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000))
  const [likeado, setLikeado] = useState(false)

  function toggleLike() {
    if (likeado) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLikeado(!likeado)
  }

  const comentarios = [
    { usuario: '@gatitosLindos', texto: 'hermoso!!' },
    { usuario: '@amoGatitos', texto: 'que tierno' },
    { usuario: '@gatoo67', texto: 'jaja, que torpe' },
  ]

  return (
    <div className="postdetallado">
      <button onClick={onVolver}>←</button>


      <div className="postdetallado-contenido">
        <img src={post.url} alt="gato" className="postdetallado-imagen" />
        <div className="postdetallado-info">
          <p className="postdetallado-usuario">@gatoo67</p>
          <p className="postdetallado-desc">Otro gatito haciendo cosas de gatos</p>
          <p className="postdetallado-fecha">26 de mayo de 2025</p>
          <div className="postdetallado-acciones">
            <button onClick={toggleLike}>{likeado ? <IoHeart color="red" /> : <IoHeartOutline />} {likes}</button>
            <button><IoChatbubbleOutline /> Comentar</button>
            <button><IoPaperPlaneOutline /> Compartir</button>
          </div>
          <div className="postdetallado-comentarios">
            {comentarios.map((comentario, i) => (
              <p key={i}><strong>{comentario.usuario}</strong> {comentario.texto}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetallado