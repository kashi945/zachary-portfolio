import { Fragment } from "react";

const data = [
  {
    icon: "fa fa-code",
    title: "Full Stack Developer",
    desc: "end-to-end application software development",
  },
  {
    icon: "fa fa-html5",
    title: "Front-End Developer",
    desc: "developing new user-facing features, determining the structure and design of web pages",
  },
  {
    icon: "fa fa-terminal",
    title: "Back-End Developer",
    desc: "services inlude server-side web application logic and integration",
  },
  {
    icon: "fa fa-mobile",
    title: "Mobile Developer",
    desc: " specialise in building apps for Google's Android, Apple's iOS",
  },
];

const Services = ({ serviceList }) => {
  const services = serviceList ? serviceList : data;
  return (
    <Fragment>
      <div className="content services">
        {/* title */}
        <div className="title">
          <span className="first-word">My</span> Services
        </div>
        {/* content */}
        <div className="row service-items border-line-v">
          {/* service item */}
          {services.map((service, i) => (
            <div key={i} className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                  <span className={service.icon} />
                </div>
                <div className="name">
                  <span>{service.title}</span>
                </div>
                <div className="desc">
                  <div>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default Services;

export const ServicesClassic = () => {
  return (
    <div className="content services">
      {/* title */}
      <div className="title">My Services</div>
      {/* content */}
      <div className="row service-items border-line-v">
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-code" />
            </div>
            <div className="name">Web Development</div>
            <p>
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-music-note" />
            </div>
            <div className="name">Music Writing</div>
            <p>
              Music copying, transcription, arranging and composition services.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-speakerphone" />
            </div>
            <div className="name">Advetising</div>
            <p>
              Advertising services include television, radio, print, mail and
              web.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-game-controller-b" />
            </div>
            <div className="name">Game Development</div>
            <p>Developing memorable and unique mobile android, ios games.</p>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
