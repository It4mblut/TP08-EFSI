function PostCard({ post, abrirPost }) {
    return (
        <div className="postcard" onClick={() => abrirPost(post)}>
            <img src={post.url} alt="gato" className="postcard-imagen" />
        </div>
    )
}

export default PostCard
