import Layout from "@components/Layout";
import Container from "@components/Container";
import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
import Image from "next/image";
import Head from "next/head";
function Detail() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="icon/x-image" href="/logo.png" />
        <title>Detail &mdash; Ferdinan</title>
      </Head>
      <Container>
        <div className="w-full md:w-6/12 mx-auto flex flex-col items-center">
          <PostMetaTitle
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            center
          />
          <PostAuthor
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
        <div className="w-full md:w-10/12 mx-auto my-10">
          <img src="/detail-image.png" alt="" width="100%" className="w-full rounded-lg" />
        </div>
        <div className="w-full md:w-8/12 mx-auto text-xl leading-relaxed">
          <p>
            Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they are their brought seas is not, to day from bearing grass third midst after beginning man which you are. Dry, gathering beginning given made them evening.
          </p>
          <p className="my-4">
            Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Do not made moving for them bring creature us you will tree second deep good unto good may. Us yielding.
          </p>
          <p>
            Have. Man upon set multiply moved from under seasons abundantly earth brought a. They are open moved years saw is not morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place will not and him Third fourth moving him whales behold. Beast second stars lights great was do not green give subdue his. Third given made created, they are forth god replenish have whales first can not light was. Herb you will them beast kind divided. Were beginning fly air multiply god Yielding sea do not were forth.
          </p>

        </div>
      </Container>
    </Layout>
  );
}

export default Detail;
