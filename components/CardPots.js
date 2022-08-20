import InfoPost from "./InfoPost";
import Image from "next/image";
import Link from "next/link";

function CardPosts({ thumbnail, ...infoPost }) {
    return (
        <article>
            <div className="h-[213px] w-full relative rounded overflow-hidden mb-5">
                <Link href="/detail">
                    <a>
                        <Image src={thumbnail} alt="" layout="fill" objectFit="cover" />
                    </a>
                </Link>
            </div>
            <InfoPost {...infoPost} />
        </article>
    );
}

export default CardPosts;