import Image from "next/image";
import Link from "next/link";

import { WordPressPost } from "@/types/wordpress";
import { stripHtml } from "@/lib/html";

import styles from "./LatestPosts.module.css";

interface LatestPostsProps {
    posts: WordPressPost[];
}

export function LatestPosts({
    posts,
}: LatestPostsProps) {

    const latestPosts = posts.slice(0, 6);

    return (
        <section className={styles.section}>


            <div className={styles.header}>
                <h2>
                    Latest from 365 Evergreen
                </h2>
            </div>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {latestPosts.map((post) => {

                        const date = new Date(
                            post.date
                        ).toLocaleDateString(
                            "en-AU",
                            {
                                day: "numeric",
                                month: "numeric",
                                year: "numeric",
                            }
                        )
                        const featuredImage = post.featuredImage ? post.featuredImage : "/default-image.jpg";

                        return (
                            <article
                                key={post.id}
                                className={styles.card}
                            >

                                {post.featuredImage && (
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={featuredImage}
                                            alt={post.title.rendered}
                                            sizes="100vw, (max-width: 1200px) 50vw, 33vw"
                                            className={styles.featuredImage}
                                        />
                                    </div>
                                )}

                                <div className={styles.content}>

                                    <span className={styles.date}>
                                        {date}
                                    </span>

                                    <h3 className={styles.title}>
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title.rendered}
                                        </Link>
                                    </h3>

                                    <p className={styles.excerpt}>
                                        {stripHtml(post.excerpt.rendered)}
                                    </p>

                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        Read article →
                                    </Link>

                                </div>

                            </article>
                        );
                    })}

                </div>

                <div className={styles.footer}>
                    <Link href="/blog">
                        View all articles
                    </Link>
                </div>

            </div>
        </section>
    );
}