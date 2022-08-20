import Head from "next/head";
import { useState } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPosts from "@components/CardPots";
import Container from "@components/Container";
import Layout from "@components/Layout";
import mockPosts from "../utils/posts.json";

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <link rel="icon" type="icon/x-image" href="/logo.png" />
        <title>Home &mdash; Ferdinan</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap -mx-4 mt-6">
          {posts.map(post => (
            <div className="w-full md:w-6/12 lg:w-4/12 px-4 py-6" key={post.id}>
              <CardPosts {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
