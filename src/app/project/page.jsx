import PostCard from '../components/PostCard/PostCard'
import styles from './Project.module.css'

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:'no-store'}) /* This is for refreshing for every render */
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}); /* This is for refreshing for every hour */

    if(!res.ok){
        throw new Error("Something went wrong");
    }
    return res.json();
}

const ProjectPage = async() => {

    const posts = await getData();

    return (
        <div className={styles.container}>

            {
                posts.map((post) => (
                    <div className={styles.post} key={post.id}>
                    <PostCard post={post}/>
                    </div>
                ))
            }
           
        </div>
    )
}

export default ProjectPage