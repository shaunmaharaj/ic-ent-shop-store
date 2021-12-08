// @ts-nocheck
import { NextPage, GetStaticProps } from 'next';
interface Props {
content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
  secondary_hero_title: string;
  secondary_hero_description: string;
  secondary_hero_image: string;
  title: string;
  description1: string;
  image1: string;
  description2: string;
  image2: string;
  description3: string;
  image3: string
}
const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
  return (
    <>
      <p>Header Placement</p>
      {/* <img src={attributes.hero_image} alt='hero image' /> */}
      <p>Content Placement</p>
      <div id="content">
        <div className="heroBanner">
          <div>
            <div>
              <a className="heroBanner_link" href="/shop/categories/27">
                <video src={attributes.hero_image} alt='hero image' className="heroBanner_image"></video>
              </a>
            </div>
          </div>
        </div>
        <div className="heroBanners">
          <div>
            <div>
              <a className="heroBanners_link" href="/shop/categories/27">
                <img src={attributes.secondary_hero_image} alt='hero image' className="heroBanners_image"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="heroBanners">
          <div>
            <div>
              <a className="heroBanners_link" href="/shop/categories/27">
                <img src={attributes.secondary_hero_image} alt='hero image' className="heroBanners_image"></img>
              </a>
            </div>
          </div>
        </div>
        <unata-shaun>hehehe</unata-shaun>
        <div dangerouslySetInnerHTML={createMarkup()} />;
      </div>
      <p>Footer Placement</p>
    </>
  );
};
function createMarkup() {
  return { __html: '<div><div><input type="text"/></div></div>' };
}
export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
};
export default HomePage;