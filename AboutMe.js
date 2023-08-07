import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I’m Donald Wellborn.</strong>
Back-end &amp; Frond-end developer from UK, London. I have rich
experience in wordpress, also I am good at Magento. I love to
talk with you about our unique.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age . . . . .</strong> 30
                </li>
                <li>
                  <strong>Residence . . . . .</strong> United States of America
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
                <li>
                  <strong>Address . . . . .</strong> Knoxville, Tennessee,
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

export const AboutMeClassic = () => {
  return (
    <div className="content about">
      {/* title */}
      <div className="title">About Me</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="text-box">
            <p>
              As a passionate and professional Senior Full Stack Developer with
              over 8 years of experience in website and hybrid/native mobile app
              development, I have extensive knowledge of modern JS libraries
              such as React, Angular, and Vue for front-end and Node.js, C#,
              .NET, Python, PHP, Laravel, MySQL, MongoDB and PostgreSQL for the
              back end. Am especially familiar with web hosting using AWS
              Services, Firebase, Heroku, and GCP. I'm also a self-motivated,
              and creative developer in hybrid mobile app development with React
              Native and as I've worked for both small and large companies, I've
              been working in a startup and fortune 500 companies for several
              years and always provided top-notch products.
            </p>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age . . . . .</strong> 30
              </li>
              <li>
                <strong>Residence . . . . .</strong> United States of America
              </li>
              <li>
                <strong>Freelance . . . . .</strong> Available
              </li>
              <li>
                <strong>Address . . . . .</strong> Knoxville, Tennessee
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
