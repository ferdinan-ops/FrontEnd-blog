import Link from "next/link";

function PostMetaTitle({ category, date, title, center }) {
   return (
      <>
         <div className="flex items-center text-white/60 space-x-4">
            <div className="uppercase text-sm">{category}</div>
            <div>&bull;</div>
            <div>{date}</div>
         </div>
         <h2 className={`text-2xl my-3 leading-10 ${center && "text-center"}`}>
            <Link href="/detail"><a>{title}</a></Link>
         </h2>
      </>
   );
}

export default PostMetaTitle;