function Displaylists({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>

    )
}

    export default Displaylists;