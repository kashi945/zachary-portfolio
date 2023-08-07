import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 2000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="labelWrapper">
          <div className="title">Recent Works</div>
          {/* filters */}

          {/* <div
            className={`f_btn ${activeBtn("photo")}`}
            onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="photo" />
              Image
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("gallery")}`}
            onClick={handleFilterKeyChange("gallery")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="gallery" />
              Gallery
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("video")}`}
            onClick={handleFilterKeyChange("video")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="video" />
              Video
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("music")}`}
            onClick={handleFilterKeyChange("music")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="music" />
              Music
            </label>
          </div> */}

          <div className="filter-menu filter-button-group">
            <div
              className={`f_btn ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="grid-item" />
                All
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("full-stack")}`}
              onClick={handleFilterKeyChange("full-stack")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="design" />
                Full Stack
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("front-end")}`}
              onClick={handleFilterKeyChange("front-end")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="design" />
                Front-End
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("back-end")}`}
              onClick={handleFilterKeyChange("back-end")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="design" />
                Back-End
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("web-development")}`}
              onClick={handleFilterKeyChange("web-development")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="design" />
                Web Development
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("mobile-development")}`}
              onClick={handleFilterKeyChange("mobile-development")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="design" />
                Mobile Development
              </label>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item full-stack front-end back-end web-development mobile-development border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/theseusAi-main.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/theseusAi-inside.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>THESEUS AI | Home</h1>
                        <div className="blog-detail">HealthCare Platform</div>
                        <div className="blog-content">
                          <p>
                            An app which is Building Tools to Drive Better
                            Treatment Decisions
                          </p>
                          {/* <p>
                            Forfeited you engrossed but gay sometimes explained.
                            Another as studied it to evident. Merry sense given
                            he be arise. Conduct at an replied removal an
                            amongst. Remaining determine few her two cordially
                            admitting old.
                          </p> */}
                          <blockquote>
                            AI-driven analysis with the help of top
                            neurosurgeons and orthopedic surgeons. Hundreds of
                            imaging data points analyzed.
                          </blockquote>
                          <p>Things done by me:</p>
                          <ul className="list-style">
                            <li>
                              Facilitated the creation of a robust suite of
                              cloud-native applications in the rapidly growing
                              healthcare software industry
                            </li>
                            <li>
                              Collaborated with others on an agile development
                              team to deliver DSCSA compliant software that
                              sustains and improves the health of individuals
                              and communities
                            </li>

                            <li>
                              Focused on Angular / Python programming /
                              architecture and the AWS ecosystem of services;
                              including Lambda, API Gateway, Amplify, Cognito,
                              Athena, S3 and others as needed
                            </li>
                            <li>
                              Contributed in the overall system architecture and
                              ongoing development of applications
                            </li>
                          </ul>
                          {/* <p>
                            Unpleasant astonished an diminution up partiality.
                            Noisy an their of meant. Death means up civil do an
                            offer wound of.
                          </p> */}
                        </div>
                        <a
                          href="https://www.theseus.ai/"
                          target="_blank"
                          className="button"
                        >
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  THESEUS AI | Home
                </a>

                <div className="category">HealthCare Platform</div>
              </div>
            </div>
          </div>
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item full-stack front-end back-end web-development border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-2" className="has-popup-media">
                  <img src="images/works/mailTag-main.jpeg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/mailTag-inside.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>MailTag</h1>
                        <div className="blog-detail">
                          Email Tracking Software
                        </div>
                        <div className="blog-content">
                          <p>Know what happens after you click send</p>
                          {/* <p>
                            Forfeited you engrossed but gay sometimes explained.
                            Another as studied it to evident. Merry sense given
                            he be arise. Conduct at an replied removal an
                            amongst. Remaining determine few her two cordially
                            admitting old.
                          </p> */}
                          <blockquote>
                            Know exactly when recipients open your emails <br />
                            Know when recipients click links within your emails
                            <br />
                            Track the performance of your open-rates, link-click
                            rates and more
                          </blockquote>
                          <p>Things done by me:</p>
                          <ul className="list-style">
                            <li>
                              Designed and developed an Email Tool Chrome
                              extension from scratch
                            </li>
                            <li>
                              Worked on both Front-end (React.js, Styled
                              Components, Material UI) and Back-end (Node.js,
                              Adonis.js) and deployed to AWS
                            </li>
                            <li>
                              Iterated testing the functionalities, bugfixing,
                              and maintenance
                            </li>
                            <li>
                              Successfully launched the app and get
                              certification from Google.
                            </li>
                          </ul>
                          {/* <p>
                            Unpleasant astonished an diminution up partiality.
                            Noisy an their of meant. Death means up civil do an
                            offer wound of.
                          </p> */}
                        </div>
                        <a
                          href="https://www.mailtag.io/"
                          target="_blank"
                          className="button"
                        >
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-2" className="name has-popup-media">
                  MailTag
                </a>

                <div className="category">Email Tracking Software</div>
              </div>
            </div>
          </div>
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item full-stack front-end back-end web-development mobile-development border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-3" className="has-popup-media">
                  <img src="images/works/revolut-main.jpeg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-3" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/revolut-inside.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Revolut</h1>
                        <div className="blog-detail">Financial Super App</div>
                        <div className="blog-content">
                          <p>
                            rEvolution is an independent, fully integrated
                            sports marketing agency comprised of industry
                            experts in consulting and business strategy
                            alongside marketing and creative specialists who
                            produce award-winning sponsorship and marketing
                            campaigns for brands and rights holders throughout
                            the global sports industry.
                          </p>
                          {/* <p>
                            Forfeited you engrossed but gay sometimes explained.
                            Another as studied it to evident. Merry sense given
                            he be arise. Conduct at an replied removal an
                            amongst. Remaining determine few her two cordially
                            admitting old.
                          </p> */}
                          <blockquote>
                            Send and request money with a tap, split bills
                            easily with anyone in 200+ countries <br />
                            Get instant payment notifications and manage card
                            security in app. Start spending straight away with
                            Google or Apple Pay <br />
                            Go from cash to crypto instantly
                          </blockquote>
                          <p>Things done by me:</p>
                          <ul className="list-style">
                            <li>
                              Developed web and native mobile applications for
                              clients in a wide variety of industries
                            </li>
                            <li>
                              Built and maintained fully custom-coded WordPress
                              website
                            </li>
                            <li>API designing and development</li>
                          </ul>
                          {/* <p>
                            Unpleasant astonished an diminution up partiality.
                            Noisy an their of meant. Death means up civil do an
                            offer wound of.
                          </p> */}
                        </div>
                        <a
                          href="https://www.revolut.com/"
                          target="_blank"
                          className="button"
                        >
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-3" className="name has-popup-media">
                  Revolut
                </a>

                <div className="category">Financial Super App</div>
              </div>
            </div>
          </div>
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item full-stack front-end back-end web-development border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-4" className="has-popup-media">
                  <img src="images/works/pozible-main.jpeg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-4" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/pozible-inside.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>pozible</h1>
                        <div className="blog-detail">Marketing Services</div>
                        <div className="blog-content">
                          <p>
                            A crowdfunding platform and community-building tool
                            for creative projects, emerging brands & visionary
                            ideas. It was developed to help people raise funds,
                            realise their aspirations and make great things
                            possible
                          </p>
                          {/* <p>
                            Forfeited you engrossed but gay sometimes explained.
                            Another as studied it to evident. Merry sense given
                            he be arise. Conduct at an replied removal an
                            amongst. Remaining determine few her two cordially
                            admitting old.
                          </p> */}
                          <blockquote>
                            Crowdfunding with Pozible is a way for motivated
                            makers to access funding beyond ‘official’ channels
                            by talking directly to switched-on consumers, fans,
                            peers and like-minded strangers <br />
                          </blockquote>
                          <p>Things done by me:</p>
                          <ul className="list-style">
                            <li>
                              Wrote PHP, MySQL, and JavaScript / jQuery code for
                              a web application that tracks project management
                              data for client vendors
                            </li>
                            <li>
                              Developed a feature that allows our vendors to
                              dynamically generate quotes and invoices through
                              our application, sign them, and send them via
                              email as fully functional PDF contracts
                            </li>
                            <li>
                              Responsible for implementing Version Control (Git)
                              for our team, leading to an improved
                              test-to-production workflow model
                            </li>
                          </ul>
                          {/* <p>
                            Unpleasant astonished an diminution up partiality.
                            Noisy an their of meant. Death means up civil do an
                            offer wound of.
                          </p> */}
                        </div>
                        <a
                          href="https://www.pozible.com/"
                          target="_blank"
                          className="button"
                        >
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-4" className="name has-popup-media">
                  pozible
                </a>

                <div className="category">Marketing Services</div>
              </div>
            </div>
          </div>{" "}
          {/* work item photo */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/works/work1.jpg" className="has-popup-image">
                  <img src="images/works/work1.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-image" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/works/work1.jpg"
                  className="name has-popup-image"
                >
                  ZOSS Clothing Logo
                </a>
                <div className="category">Image</div>
              </div>
            </div>
          </div> */}
          {/* work item video */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="has-popup-video"
                >
                  <img src="images/works/work2.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="name has-popup-video"
                >
                  NUDE Branding Mockup
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div> */}
          {/* work item music */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="has-popup-music"
                >
                  <img src="images/works/work3.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-music-note" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup">
                  Art Poster Mockup
                </a>
                <div className="category">Music</div>
              </div>
            </div>
          </div> */}
          {/* work item photo */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/work5.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                  <div id="gallery-1" className="mfp-hide">
                    <a href="images/works/work5.jpg" />
                    <a href="images/works/work1.jpg" />
                    <a href="images/works/work6.jpg" />
                  </div>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup-image">
                  RETR Style
                </a>
                <div className="category">Gallery</div>
              </div>
            </div>
          </div> */}
          {/* work item music */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="has-popup-music"
                >
                  <img src="images/works/work7.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-music-note" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup">
                  OYYI Mobile App
                </a>
                <div className="category">Music</div>
              </div>
            </div>
          </div> */}
          {/* work item video */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="has-popup-video"
                >
                  <img src="images/works/work6.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="name has-popup-video"
                >
                  Infinity Logo
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div> */}
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
