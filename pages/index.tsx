// @ts-nocheck
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
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
      <Head>
        <script type="text/javascript" src="https://ic-ent-shop-store.netlify.app/widgets.js"></script>
      </Head>
      {/* Header Placement */}
      <unata-legacy-nav-view></unata-legacy-nav-view>
      <unata-legacy-side-cart-view></unata-legacy-side-cart-view>
      <unata-legacy-search-view></unata-legacy-search-view>
      <unata-legacy-checkout-view></unata-legacy-checkout-view>
      {/* <img src={attributes.hero_image} alt='hero image' /> */}
      {/* Content Placement */}
      <div id="content">
        <div className="heroBanner">
          <div>
            <div>
              <a className="heroBanner_link" href="https://uat-gar-platform-master-web.unataops.com/shop/featured/145/test-mlp">
                <video src={hero_spot_content.attributes.hero_image} alt='hero image' className="heroBanner_video" loop={true} autoPlay={true} muted></video>
              </a>
              <div className="overlay">
                <p>bring good food for you!</p>
              </div>
            </div>
          </div>
        </div>
        <unata-legacy-product-collection collection-id="34"></unata-legacy-product-collection>
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
        <unata-legacy-product-collection collection-id="44"></unata-legacy-product-collection>
        <div className="heroBanner">
          <div>
            <div>
              <a className="heroBanner_link" href="https://uat-gar-platform-master-web.unataops.com/shop/categories/6">
                <img src={secondary_home_content.attributes.secondary_hero_image} alt='hero image' className="heroBanner_image"></img>
              </a>
            </div>
          </div>
        </div>
        {/* <unata-shaun>hehehe</unata-shaun> */}
        {/* <div dangerouslySetInnerHTML={createMarkup()} />; */}
      </div >
      {/* Footer Placement */}
      <unata-legacy-footer-view></unata-legacy-footer-view>
    </>
  );
};
function createMarkup() {
  return { __html: '<unata-legacy-nav-view><div hidden>TODO</div></unata-legacy-nav-view>' };
}
export const getStaticProps: GetStaticProps = async () => {
  const hero_spot_content = await import(`../content/pages/${'home'}.md`);
  const three_grid_content = await import(`../content/pages/${'3_grid_container'}.md`);
  const secondary_home_content = await import(`../content/pages/${'secondary_home'}.md`);
  return { props: { hero_spot_content: hero_spot_content.default, three_grid_content: three_grid_content.default, secondary_home_content: secondary_home_content.default } };
};
export default HomePage;
