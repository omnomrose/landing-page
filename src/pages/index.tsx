import Header from "@/components/Header";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import Spline from '@splinetool/react-spline';
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className={styles.main}>
    <Head>
      <title>haven</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/haven-favi.svg" />
    </Head>
    <div className={styles.beforeFold}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.foldContent}>

        <div className={styles.taglineCta}>
          <h1 className={styles.tagline}>Find Haven in Every Paw —<br />Every Heart Deserves a Home.</h1>
          <div className={styles.ctaBtns}>
            <button className={styles.adoptBtn}>Adopt Today →</button>
          </div>
        </div>
        <div className={styles.catHeader}>
          <Spline scene="https://prod.spline.design/K16-mEPTK-UBgEOu/scene.splinecode" />
        </div>
      </div>
    </div>

      <div className={styles.volunteerContainer}>
      <div className={styles.paw}>
          <Spline scene="https://prod.spline.design/iUrGIm8GyxsnyQEE/scene.splinecode" />
      </div>
      <div className={styles.aboutContainer}>
          <h1 className={styles.aboutHeader}>Support Our Cause: Giving <br/>Hope, One Paw at a Time.</h1>
          <p className={styles.about}>Your donations help provide vital essentials for the animals at Haven, ensuring they receive the love, care, and support they need. With your help, we can create a haven of comfort, warmth, and well—being for our cuddly friends awaiting their future homes.</p>
        </div>
      </div>
      <div className={styles.charityContainer}>
        <h1 className={styles.charityHeader}>Charity Options</h1>
        <p className={styles.charity}>Your support will directly aid in offering shelter, nurturing, and affection to abandoned and mistreated animals. Payments are facilitated through Every.org, a nonprofit platform enabling donors to effortlessly support various charitable organizations.</p>
      </div>
      <div className={styles.cardContainer}>
       <Card
        header="Lil Bub's"
        description="Lil BUB's Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond."
        splineScene="https://prod.spline.design/KKJnAInUWszoNnLj/scene.splinecode"/>
        <Card
        header="The Humane League"
        description="We exist to end the abuse of animals raised for food by influencing the policies of the world’s biggest companies, demanding legislation, and..."
        splineScene="https://prod.spline.design/HAs9AT6W3-fnOiWM/scene.splinecode" />
        <Card
        header="Mercy for Animals"
        description="We are a 501(c)(3) nonprofit organization, is highly recognized as one of the world’s most effective charities working to end the exploitation of animals."
        splineScene="https://prod.spline.design/l0v8Iuk5cP5EeEba/scene.splinecode"
        />
      </div>
      <div className={styles.Cta}>
        <Cta/>
      </div>
    <Footer/>
  </main>
  );
}
