import HomeCarousel from "../components/home/HomeCarousel";
import HomeController from "../controllers/HomeController";

export default class Home extends HomeController {
  render() {
    return (
      <>
      <HomeCarousel settings={this.settings}/>
      </>
    );
  }
}
