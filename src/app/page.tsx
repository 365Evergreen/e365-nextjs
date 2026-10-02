import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Solutions } from "@/components/Solutions/Solutions";
import { LatestPosts } from "@/components/LatestPosts/LatestPosts";

import { getPosts } from "@/lib/wordpress";

export default async function HomePage() {

    const posts = await getPosts();

    return (
        <>
            <Hero />

            <Services />

            <Solutions />


            <LatestPosts
                posts={posts.slice(0, 3)}
            />

            
        </>
    );
}