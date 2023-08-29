import styles from "../Footer/Footer.module.css";
import Image from "next/image";
import logo from "../../assets/logga.png";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.footerItems}>
          <div className={styles.logoItem}>
            <Image src={logo} alt="Picture of the author" />
          </div>

          <div className={styles.informationItem}>
            <h1>KONTAKT</h1>
            <h2> Tel: 0472 - 340 76 </h2>
            <h2> Fax: 0472 - 344 35</h2>
            <a href="mailto:info@abt-balken.se">E-post: info@abt-balken.se</a>
          </div>

          <div className={styles.informationItem}>
            <h1>ADRESS</h1>
            <h2> Olvägen 20, 342 50 Vislanda </h2>
          </div>
        </div>

        <div className={styles.copyright}>
          <h5>Copyright ABT BALKEN AB</h5>
        </div>
      </div>
    </div>
  );
}
