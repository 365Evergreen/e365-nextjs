import type {
  WordPressPage,
  WordPressPost,
} from "@/types/wordpress";

const wordpressUrl = process.env.WORDPRESS_URL?.replace(/\/$/, "");

function getWordPressUrl(): string {
  if (!wordpressUrl) {
    throw new Error(
      "WORDPRESS_URL is not configured. Add it to .env.local or the build environment.",
    );
  }

  return wordpressUrl;
}

async function wordpressFetch<T>(
  path: string,
  searchParams?: Record<string, string>,
): Promise<T> {
  const url = new URL(
    `/wp-json/wp/v2/${path.replace(/^\//, "")}`,
    getWordPressUrl(),
  );

  Object.entries(searchParams ?? {}).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },

    // Content is collected during the static build.
    cache: "force-cache",
  });

  if (!response.ok) {
    const responseText = await response.text();

    throw new Error(
      [
        `WordPress request failed: ${response.status} ${response.statusText}`,
        `Endpoint: ${url.toString()}`,
        responseText,
      ].join("\n"),
    );
  }

  return (await response.json()) as T;
}

export async function getPosts(): Promise<WordPressPost[]> {
  return wordpressFetch<WordPressPost[]>("posts", {
    status: "publish",
    per_page: "100",
    page: "1",
    orderby: "date",
    order: "desc",
    _embed: "1",
  });
}

export async function getPostBySlug(
  slug: string,
): Promise<WordPressPost | null> {
  const posts = await wordpressFetch<WordPressPost[]>("posts", {
    slug,
    status: "publish",
    per_page: "1",
    _embed: "1",
  });

  return posts[0] ?? null;
}

export async function getPages(): Promise<WordPressPage[]> {
  return wordpressFetch<WordPressPage[]>("pages", {
    status: "publish",
    per_page: "100",
    page: "1",
    orderby: "menu_order",
    order: "asc",
    _embed: "1",
  });
}

export async function getPageBySlug(
  slug: string,
): Promise<WordPressPage | null> {
  const pages = await wordpressFetch<WordPressPage[]>("pages", {
    slug,
    status: "publish",
    per_page: "1",
    _embed: "1",
  });

  return pages[0] ?? null;
}

export function getFeaturedImageUrl(
  post: WordPressPost | WordPressPage,
): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

export function getFeaturedImageAlt(
  post: WordPressPost | WordPressPage,
): string {
  return (
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ??
    post.title.rendered
  );
}

export function getAuthorName(post: WordPressPost): string | null {
  return post._embedded?.author?.[0]?.name ?? null;
}