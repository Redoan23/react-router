export default function Post({ post }) {
    const { title, id, userId, body } = post
    console.log(post)
    return (
        <div style={{border:'2px solid black', borderRadius:"5px", padding:'5px', backgroundColor:""}}>
            <p style={{fontWeight:"1000"}}>{id}</p>
            <h2 style={{color:"coral"}}>{title}</h2>
        </div>
    )
}