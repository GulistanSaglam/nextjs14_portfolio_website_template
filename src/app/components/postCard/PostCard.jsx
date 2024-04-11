"use client";
import styles from './PostCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({post}) => {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    function truncateTitle(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/card.png" alt='' fill className={styles.cardImage}/>
                </div>
                <span className={styles.date}>11.04.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{truncateTitle(post?.title, 20)}</h1>
                <p className={styles.desc}>  {truncate(post?.body, 150)}</p>
                <Link className={styles.link} href={`/project/${post.id}`}>See More</Link>
            </div>
        </div>
    )
}

export default PostCard