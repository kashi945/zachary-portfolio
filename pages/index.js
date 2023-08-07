import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
As a passionate and professional Senior Full Stack Developer with over 8 years
of experience in website and hybrid/native mobile app development, 
I have extensive knowledge of modern JS libraries such as React, Angular, 
and Vue for front-end and Node.js, C#, .NET, Python, PHP, Laravel, MySQL, 
MongoDB and PostgreSQL for the back end. Am especially familiar with web hosting using AWS Services, 
Firebase, Heroku, and GCP. I'm also a self-motivated, and creative developer in hybrid mobile app development 
with React Native and as I've worked for both small and large companies, 
I've been working in a startup and fortune 500 companies for several years and always provided top-notch products.
</p>`;
const IndexDark = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-2-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/bg-main.png)" }}
          />
          <div className="image">
            <img src="images/profileMain-square.jpeg" alt="" />
          </div>
          <div className="title">Zachary Reynolds</div>
          <TypingAnimation />
          <div className="social">
            {/* <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <span className="fa fa-dribbble" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>

            <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/zachkirkrey"
            >
              <span className="fa fa-github" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/zachkirkrey/"
            >
              <span className="fa fa-linkedin" />
            </a>
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/"
            >
              <span className="fa fa-stack-overflow" />
            </a> */}
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="docs/CV.pdf" className="lnk" download="zachkirkrey_resume.pdf">
              <span className="text">Download CV</span>
            </a>
            <a href="mailto:zachreynolds54@gmail.com" className="lnk discover">
              <span className="text">Email Me</span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          {/* <Pricing />
          <FunFact /> */}
          <Clients />
          {/* <Quote /> */}
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        {/* <Blog>
          <BlogSection />
        </Blog> */}
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
