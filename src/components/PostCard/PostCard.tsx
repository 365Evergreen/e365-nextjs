import Image from "next/image";
import Link from "next/link";
import {
    getFeaturedImageAlt,
    getFeaturedImageUrl,
} from "@/lib/wordpress";
import { decodeHtmlEntities, stripHtml } from "@/lib/html";
import type { WordPressPost } from "@/types/wordpress";
import styles from "./PostCard.module.css";

interface PostCardProps {
    post: WordPressPost;
}

export function PostCard({ post }: PostCardProps) {
    const imageUrl = getFeaturedImageUrl(post);
    const imageAlt = getFeaturedImageAlt(post);
    const title = decodeHtmlEntities(post.title.rendered);
    const excerpt = stripHtml(post.excerpt.rendered);

    return (
        <article className={styles.card}>  <h2 className={styles.title}><Link href={`/blog/${post.slug}/`}>
                    {title}
                </Link>
                </h2>
            {imageUrl ? (
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={imageUrl} alt={imageAlt} width={100} height={100} />
                </div>
            ) : null}

            <div className={styles.content}>
                <p className={styles.date}>
                    {new Intl.DateTimeFormat("en-AU", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                    }).format(new Date(post.date))}
                </p>

              

                {excerpt ? <p className={styles.excerpt}>{excerpt}</p> : null}

                <Link className={styles.link} href={`/blog/${post.slug}/`}>
                    Read article
                </Link>
            </div>
        </article>
    );
}