import './Usuario.css'
function Usuario() {
    const usuario = {
        nombre: 'Juan López',
        username: '@juancito.loPz',
        bio: 'Solo alguien que ama a los gatos',
        publicaciones: 24,
        seguidores: 1300,
        seguidos: 430,
        foto: 'https://fotografias-atreseries.atresmedia.com/clipping/cmsimages02/2018/06/06/54229044-BF06-42B7-A62E-AC06B1348713/70.jpg?crop=1574,885,x0,y42&width=480&height=270&optimize=high&format=webply',
        galeria: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-f7XnOLNFue0Wwv9NUtYFRjCcLnQGms1sQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1llGEli9aS7wm7s4Wl1l-jmidoZ-08bMrg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhLfdHxkRbS03FmtbNmX_RB2Zdlq_uHrqxw&s',
        ]
    }
    return (
        <div className="usuario">
            <div className="usuario-header">
                <img src={usuario.foto} alt="perfil" />
                <div>
                    <p>{usuario.nombre}</p>
                    <p>{usuario.username}</p>
                    <div className="usuario-info">
                        <span>{usuario.publicaciones} publicaciones</span>
                        <span>{usuario.seguidores} seguidores</span>
                        <span>{usuario.seguidos} seguidos</span>
                    </div>
                    <p>{usuario.bio}</p>
                    <button>Editar perfil</button>
                </div>
            </div>
            <div className="usuario-publicaciones">
                {usuario.galeria.map((url, i) => (
                    <img key={i} src={url} alt="publicacion" />
                ))}
            </div>
        </div>
    )
}
export default Usuario