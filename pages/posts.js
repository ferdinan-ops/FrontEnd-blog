import Layout from "@components/Layout";
import CardPosts from "@components/CardPots";
import { useState } from "react";
import Container from "@components/Container";
import mockPosts from "../utils/posts.json";
import SectionHead from "@components/SectionHead";
import Head from "next/head";

function Posts() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <link rel="icon" type="icon/x-image" href="/logo.png" />
        <title>Posts &mdash; Ferdinan</title>
      </Head>
      <Container>
        <SectionHead>UI Design</SectionHead>
        {!posts.length ? (
          <div className="text-center py-[100px]">
            <h2 className="text-6xl mb-4">No result 😥</h2>
            <p className="text-xl text-white/60 w-full md:w-6/12 md:mx-auto">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4 mt-6">
            {posts.map((post) => (
              <div className="w-full md:w-6/12 lg:w-4/12 px-4 py-6" key={post.id}>
                <CardPosts {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout >
  );
}

export default Posts;
