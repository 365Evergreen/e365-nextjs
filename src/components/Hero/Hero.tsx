import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
    return (
        <section className={styles.hero}>            <Image
              className={styles.siteLogo}
              src="/icon.svg" alt="365 Evergreen"
              width={50}
              height={50} >
            </Image>       
            <div className={styles.container}>

                <div className={styles.content}>
            <Image
              className={styles.siteLogo}
              src="/icon.svg" alt="365 Evergreen"
              width={50}
              height={50} >
            </Image>       
                    <span className={styles.eyebrow}>
                        Microsoft 365 Specialists
                    </span>

                    <h1>
                        Modern Microsoft 365 solutions that
                        improve collaboration, governance
                        and productivity.
                    </h1>
<p>
                        We help organisations get more from
                        SharePoint, Microsoft Copilot,
                        Power Platform and Microsoft 365
                        with practical, outcome-focused
                        solutions.
                    </p>

                    <div className={styles.actions}>
                        <Link
                            href="/contact"
                            className={styles.primaryButton}
                        >
                            Book a Consultation
                        </Link>

                        <Link
                            href="/services"
                            className={styles.secondaryButton}
                        >
                            Explore Services
                        </Link>
                    </div>

                </div>

                <div className={styles.visual}>

                    <div className={styles.statCard}>
                        <h3>SharePoint</h3>
                        <p>Intranets and document management</p>
                    </div>

                    <div className={styles.statCard}>
                        <h3>Copilot</h3>
                        <p>Readiness, governance and adoption</p>
                    </div>

                    <div className={styles.statCard}>
                        <h3>Power Platform</h3>
                        <p>Apps, automation and business workflows</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
