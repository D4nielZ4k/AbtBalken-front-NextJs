import styles from "./Topbar.module.css";
import Image from "next/image";
import logo from "../../assets/logga.png";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className={styles.container}>
      <div className={styles.topBarConteiner}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="Picture of the author" />
          </Link>
        </div>

        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <a href="https://www.google.com">Om Oss</a>
          </div>
          <div className={styles.menuItem}>
            <a href="https://www.google.com">Kontakt</a>
          </div>

          <div className={styles.menuItem}>
            <a href="https://www.google.com">Dokument</a>
          </div>
          <div className={styles.menuItem}>
            <a href="https://www.google.com">Offertförfrågan</a>
          </div>
          <div className={styles.menuItem}>
            <Link href="/contact">Kontakt oss</Link>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuSicialMediaItem}>
              <a href="https://www.instagram.com">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div className={styles.menuSicialMediaItem}>
              <a href="https://www.facebook.com/abtbalken">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
