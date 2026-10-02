export interface WordPressRenderedValue {
  rendered: string;
  protected?: boolean;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  description?: string;
  link?: string;
  avatar_urls?: Record<string, string>;
}

export interface WordPressMediaDetails {
  width?: number;
  height?: number;
}

export interface WordPressMedia {
  id: number;
  date?: string;
  slug?: string;
  type?: string;
  link?: string;
  title?: WordPressRenderedValue;
  caption?: WordPressRenderedValue;
  alt_text?: string;
  media_type?: string;
  mime_type?: string;
  source_url?: string;
  media_details?: WordPressMediaDetails;
}

export interface WordPressEmbeddedResources {
  author?: WordPressAuthor[];
  ["wp:featuredmedia"]?: WordPressMedia[];
}

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WordPressRenderedValue;
  content: WordPressRenderedValue;
  excerpt: WordPressRenderedValue;
  featuredImage?: string;
  featuredImageAlt?: string;
  categories: number[];
  tags: number[];
  _embedded?: WordPressEmbeddedResources;
}

export interface WordPressPage {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WordPressRenderedValue;
  content: WordPressRenderedValue;
  excerpt: WordPressRenderedValue;
  featured_media: number;
  parent: number;
  menu_order: number;
  _embedded?: WordPressEmbeddedResources;
}