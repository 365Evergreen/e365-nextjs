import styles from "./Services.module.css";

const services = [
    {
        title: "SharePoint",
        description:
            "Modern intranets, communication sites, knowledge management and document management solutions."
    },
    {
        title: "Microsoft Copilot",
        description:
            "Readiness assessments, governance frameworks, adoption programs and implementation guidance."
    },
    {
        title: "Power Platform",
        description:
            "Power Apps, Power Automate and low-code solutions that streamline business processes."
    },
    {
        title: "Microsoft 365 Governance",
        description:
            "Information architecture, lifecycle management, compliance and security."
    }
];

export function Services() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.heading}>
                    <h2>Services</h2>

                    <p>
                        Specialist consulting and implementation
                        services across the Microsoft ecosystem.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map(service => (
                        <article
                            key={service.title}
                            className={styles.card}
                        >
                            <h3>{service.title}</h3>

                            <p>
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}