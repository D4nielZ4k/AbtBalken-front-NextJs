import Image from "next/image";
import hem from "../../assets/hem.jpg";
import styles from "./Hem.module.css";

export default function Hem() {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h3 className={styles.description}>
          ABT-Balken AB AB A.Salomonsson & Söner bildades 1971 som ett
          byggnadsföretag med inriktning mot sågverksindustrin. Behovet av
          konstruktioner med större spännvidder ökade, och 1973 startades
          tillverkning av stålkonstruktioner till lager, produktionslokaler etc.
          Under åttiotalet ändrades namnet till ABT-Balken AB.
        </h3>
      </div>

      <div className={styles.imageSection}>
        <Image src={hem} alt="Moje zdjęcie" width={600} height={400} />
      </div>
      <div className={styles.textSection}>
        <h3 className={styles.description}>
          Vi har en modern verkstad och investerar ständigt i vår maskinpark för
          att vara konkurrensstarka och effektivisera vår verksamhet. Vi arbetar
          kontinuerligt med att utbilda personalen och ser alltid till att vår
          personal har giltiga licenser både när det gäller svets och Heta
          Arbeten m.m. Duktig och kvalitetsmedveten personal och väl utförda
          arbeten gör att vi kan leverera i tid. Vi vill att kunden ska vara
          försäkrad om att han/hon köper stål oavsätt vad det gäller, ska det
          uppfylla gällande normer och regler.
        </h3>
        <h1 className={styles.subtitle}>Kvalitetspolicy</h1>
        <h3 className={styles.description}>
          ABT-BALKEN ABs policy är att tillverka och leverera skräddarsydda
          stålkonstruktioner enligt kundens önskemål. Kvalitet skall uppnås
          genom att kvalitetshandboken följs samt att den kvalitetsansvarige
          inom företaget, ser till att personalen har de kunskaper samt den
          utrustning som krävs för att kvalitet skall uppnås. Den
          kvalitetsansvarige ansvarar för att kvalitetssystemet följs och att
          det uppdateras kontinuerligt.
        </h3>
      </div>

      <div className={styles.socialMedia}>
        <h1 className={styles.title}>FÖLJ OSS PÅ INSTAGRAM</h1>
        zdiecia
      </div>
    </div>
  );
}
