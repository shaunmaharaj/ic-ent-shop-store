// @ts-nocheck
import { NextPage, GetStaticProps } from 'next';
interface Props {
  hero_spot_content: { attributes: HomeAttributes };
  three_grid_content: { attributes: HomeAttributesThreeGrid };
  secondary_home_content: { attributes: HomeAttributesSecondary };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
}
interface HomeAttributesThreeGrid {
  title: string;
  description1: string;
  image1: string;
  description2: string;
  image2: string;
  description3: string;
  image3: string
}
interface HomeAttributesSecondary {
  secondary_hero_title: string;
  secondary_hero_description: string;
  secondary_hero_image: string;
}
const HomePage: NextPage<Props> = ({ hero_spot_content, three_grid_content, secondary_home_content }) => {
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
                <video src={hero_spot_content.attributes.hero_image} alt='hero image' className="heroBanner_video" loop="true" autoplay="true" muted></video>
              </a>
              <div class="overlay">
                <p>bring good food for you!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homepageGrid" >
          <div>
            <h3>Delicious Holiday Favorites</h3>
            <div>
              <img src={three_grid_content.attributes.image1} alt='hero image' className="heroBanners_image"></img>
              <span className="subtitle">Holiday Appetizers</span>
            </div>
            <div>
              <img src={three_grid_content.attributes.image2} alt='hero image' className="heroBanners_image"></img>
              <span className="subtitle">Holiday Sides</span>
            </div>
            <div>
              <img src={three_grid_content.attributes.image3} alt='hero image' className="heroBanners_image"></img>
              <span className="subtitle">Desserts</span>
            </div >
          </div >
        </div>
        <div className="heroBanner">
          <div>
            <div>
              <a className="heroBanner_link" href="/shop/categories/27">
                <img src={secondary_home_content.attributes.secondary_hero_image} alt='hero image' className="heroBanner_image"></img>
              </a>
            </div>
          </div>
        </div>
        <unata-shaun>hehehe</unata-shaun>
        <div dangerouslySetInnerHTML={createMarkup()} />;
      </div >
      <p>Footer Placement</p>
    </>
  );
};
function createMarkup() {
  return { __html: '<div><div><input type="text"/></div></div>' };
}
export const getStaticProps: GetStaticProps = async () => {
  const hero_spot_content = await import(`../content/pages/${'home'}.md`);
  const three_grid_content = await import(`../content/pages/${'3_grid_container'}.md`);
  const secondary_home_content = await import(`../content/pages/${'secondary_home'}.md`);
  return { props: { hero_spot_content: hero_spot_content.default, three_grid_content: three_grid_content.default, secondary_home_content: secondary_home_content.default } };
};
export default HomePage;