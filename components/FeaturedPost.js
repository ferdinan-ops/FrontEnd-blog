import featuredThumbnail from "../public/featured-thumbnail.png";
import Image from "next/image";
import InfoPost from "./InfoPost";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex flex-wrap -mx-4 items-start lg:items-center">
        <div className="w-full px-4 lg:w-8/12 md:w-7/12 mb-4 md:mb-0">
          <Link href="/detail">
            <a>
              <Image src={featuredThumbnail} alt="" className="rounded-xl w-full" />
            </a>
          </Link>
        </div>
        <div className="w-full px-4 lg:w-4/12 md:w-5/12">
          <InfoPost
            category="UI Design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliffquip deserunt reprehenderit elit laborum. "
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
