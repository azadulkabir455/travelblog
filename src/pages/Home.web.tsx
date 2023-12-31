import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import HomeAbout from "../components/home/HomeAbout";
import HomeBlog from "../components/home/HomeBlog";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeController from "../controllers/HomeController";

export default class Home extends HomeController {
  render() {
    return (
      <>
      <Navbar />
      <HomeCarousel settings={this.settings}/>
      <HomeAbout />
      <HomeBlog />
      <Footer />
      </>
    );
  }
}
