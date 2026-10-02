import Link from "next/link";
import styles from "./Solutions.module.css";

const solutions = [
    {
        title: "SharePoint Intranet Starter",
        description:
            "Launch a professional SharePoint intranet with governance, navigation and publishing ready to go.",
        link: "/solutions/sharepoint-intranet"
    },
    {
        title: "Copilot Readiness Assessment",
        description:
            "Understand content exposure, governance requirements and organisational readiness for Copilot.",
        link: "/solutions/copilot-readiness"
    },
    {
        title: "Document Management Accelerator",
        description:
            "Implement a structured approach to records, retention and document lifecycle management.",
        link: "/solutions/document-management"
    }
];

export function Solutions() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.heading}>
                    <h2>Featured Solutions</h2>

                    <p>
                        Packaged offerings designed to
                        deliver value quickly.
                    </p>
                </div>

                <div className={styles.grid}>
                    {solutions.map(solution => (
                        <article
                            key={solution.title}
                            className={styles.card}
                        >
                            <h3>
                                {solution.title}
                            </h3>

                            <p>
                                {solution.description}
                            </p>
                            <Link className={styles.link} href={solution.link}>
                                Learn more →
                            </Link>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}