import PostUser from '@/app/components/postUser/postUser';
import styles from './singleProject.module.css';
import Image from 'next/image';
import { Suspense } from 'react';


const getData = async (slug) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

   if(!res.ok){
       throw new Error("Something went wrong");
   }
   return res.json();
}

const SingleProjectPage = async({params}) => {
   const {slug} = params;
   const post = await getData(slug);

    return (
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src="/card.png" alt='image' fill className={styles.img}/>
          </div>
           <div className={styles.textContainer}>
            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.detail}>
               <Image className={styles.avatar} src="/noavatar.png" alt="user image" width={50} height={50}/>
               
               <Suspense fallback={<div>Loading...</div>}>
               <PostUser userId = {post.userId}/>
               </Suspense>

               <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>09.04.2024</span>
               </div>
            </div>

            <div className={styles.content}>
              {post.body}
            </div>

           </div>
        </div>
    )
}

export default SingleProjectPage

