import Image from "next/image";
function PostAuthor({ authorAvatar, authorName, authorJob }) {
   return (
      <div className="mt-5 flex items-center">
         <Image src={authorAvatar} alt={authorName} className="rounded-full object-cover" width="50px" height="50px" />
         <div className="ml-4">
            <h3>{authorName}</h3>
            <div className="text-white/60 text-sm mt-1">{authorJob}</div>
         </div>
      </div>
   );
}

export default PostAuthor;