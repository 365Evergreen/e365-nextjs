import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAuthorName,
  getFeaturedImageAlt,
  getFeaturedImageUrl,
  getPostBySlug,
  getPosts,
} from "@/lib/wordpress";
import {
  decodeHtmlEntities,
  sanitiseWordPressHtml,
  stripHtml,
} from "@/lib/html";
import styles from "./page.module.css";
interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: decodeHtmlEntities(post.title.rendered),
    description: stripHtml(post.excerpt.rendered),
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const title = decodeHtmlEntities(post.title.rendered);
  const authorName = getAuthorName(post);
  const featuredImageUrl = getFeaturedImageUrl(post);
  const featuredImageAlt = getFeaturedImageAlt(post);
  const safeContent = sanitiseWordPressHtml(post.content.rendered);

  const publishedDate = new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <article className={styles.pageSection}>
      <div className={styles.container}>
        <header className={styles.pageHeading}>
          <p>
            Published {publishedDate}
            {authorName ? ` by ${authorName}` : ""}
          </p>

          <h1>{title}</h1>
        </header>


        <div
          className={styles.prose}
          dangerouslySetInnerHTML={{
            __html: safeContent,
          }}
        />        {featuredImageUrl ? (
          <Image
            src={featuredImageUrl}
            alt={featuredImageAlt || title}
            width={100}
            height={60}
            className={styles.featuredImage}
          />
        ) : null}

      </div>
    </article>
  );
}