import styles from './home.module.css';
import Image from "next/image";

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit non aspernatur neque, est dolorum ad. In quidem obcaecati temporibus?</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt='' fill className={styles.brand}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.jpg" alt='' fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;

