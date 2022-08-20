import Image from "next/image";
import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";
export default function InfoPost({ category, date, title, shortDescription, authorAvatar, authorName, authorJob, }) {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="text-white/60 leading-7">{shortDescription}</p>
      <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} />
    </>
  );
}
