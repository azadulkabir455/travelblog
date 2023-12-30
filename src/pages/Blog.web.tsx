import Navbar from "../components/global/Navbar";
import BlogController from "../controllers/BlogController";
import Footer from "../components/global/Footer";
import BlogCardLarge from "../components/global/BlogCardLarge";
import BlogList from "../components/global/BlogList";
import { ArrowLeft, ArrowRight, Grid, List, Maximize, Search } from "react-feather";
import SideBarContent from "../components/global/SideBarContent";
import PopularPost from "../components/global/PopularPost";

export default class Blog extends BlogController {
  render() {
    return (
      <>
        <Navbar />
        <div className="blogBanner sectionPadding bg-primary bg-opacity-10 mx-4 rounded-4">
          <h3 className="text-secondary text-center text-capitalize mb-3">
            Travel blogs
          </h3>
          <p className="text-body-secondary w-25 text-center mx-auto">
            Welcome to our journal. Here you can find the latest company news
            and business articles.
          </p>
        </div>
        <div className="container-lg">
          <div className="blogContainer sectionPadding">
            <div className="row g-5">
              <div className="col-12 col-lg-8">
                <div className="blogLeftSide">
                  <div className="shortingArea hstack gap-2 mb-4">
                    <Maximize
                      size="38px"
                      className={`p-2 bg-light shadow rounded-1 btn ${
                        this.state.blogLarge ? "active" : ""
                      }`}
                      onClick={() => this.blogGridChangeFuntion("blogLarge")}
                    />
                    <Grid
                      size="38px"
                      className={`p-2 bg-light shadow rounded-1 btn ${
                        this.state.blogSmall ? "active" : ""
                      }`}
                      onClick={() => this.blogGridChangeFuntion("blogSmall")}
                    />
                    <List
                      size="38px"
                      className={`p-2 bg-light shadow rounded-1 btn ${
                        this.state.blogList ? "active" : ""
                      }`}
                      onClick={() => this.blogGridChangeFuntion("blogList")}
                    />
                  </div>
                  {this.state.blogLarge && (
                    <>
                      <BlogCardLarge />
                      <BlogCardLarge />
                    </>
                  )}
                  {this.state.blogSmall && (
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <BlogCardLarge small={true} />
                      </div>
                      <div className="col-12 col-md-6">
                        <BlogCardLarge small={true} />
                      </div>
                    </div>
                  )}
                  {this.state.blogList && (
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <BlogList
                          imgUrl="https://shorturl.at/lFGNX"
                          title="Magna Mollis Ultricies"
                          date="8 August 2022"
                          comment="3"
                        />
                      </div>
                      <div className="col-6 col-md-4">
                        <BlogList
                          imgUrl="https://shorturl.at/lFGNX"
                          title="Magna Mollis Ultricies"
                          date="8 August 2022"
                          comment="3"
                        />
                      </div>
                      <div className="col-6 col-md-4">
                        <BlogList
                          imgUrl="https://shorturl.at/lFGNX"
                          title="Magna Mollis Ultricies"
                          date="8 August 2022"
                          comment="3"
                        />
                      </div>
                    </div>
                  )}
                  <div className="blogPagination mt-2">
                    <nav aria-label="...">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <span className="page-link"><ArrowLeft size="17px"/></span>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">2</span>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <ArrowRight size="17px"/>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="searchBox mb-5">
                  <h3 className="text-secondary text-capitalize mb-3">
                    Search your blogs:{" "}
                  </h3>
                  <div className="input-group rounded-5 border border-body-secondary overflow-hidden w-75">
                    <input
                      type="text"
                      className="form-control py-2 border-0 shadow-none"
                    />
                    <span className="input-group-text border-0 searchIcon">
                      <Search color="#d16b86" size="26px" />
                    </span>
                  </div>
                </div>
                <PopularPost title="Popular posts" />
                <SideBarContent />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
