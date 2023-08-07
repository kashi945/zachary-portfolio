import { Fragment } from "react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-paint-brush" />
                </div>
                <div className="name">Design</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Web Design</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">API design and development </div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Mobile Development</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Back-end Development</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          {/* skill item */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Portugees</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Spanish</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "50%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list circles">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <div className="name">Coding</div>
              </div>
              <ul>
                <li>
                  <div className="name">React.js / React Native</div>
                  <div className="progress p98">
                    <span>98%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name"> Next.js / Redux.js</div>
                  <div className="progress p98">
                    <span>98%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Vue.js / Vuetify</div>
                  <div className="progress p93">
                    <span>93%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Ruby on Rails</div>
                  <div className="progress p92">
                    <span>92%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Python</div>
                  <div className="progress p94">
                    <span>94%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">C# / ASP.NET</div>
                  <div className="progress p90">
                    <span>90%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">PHP / Laravel / CodeIgniter</div>
                  <div className="progress p89">
                    <span>89%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">HTML5 / CSS</div>
                  <div className="progress p97">
                    <span>97%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">JavaScript / JQuery / TypeScript</div>
                  <div className="progress p95">
                    <span>95%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">AngularJS / Material</div>
                  <div className="progress p85">
                    <span>85%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">D3.js</div>
                  <div className="progress p90">
                    <span>90%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">GasbyJS</div>
                  <div className="progress p87">
                    <span>87%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Prismic CMS</div>
                  <div className="progress p90">
                    <span>90%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">REST APIs</div>
                  <div className="progress p95">
                    <span>95%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">
                    Front-End Technologies
                    <ul className="disc-list">
                      <li>React</li>
                      <li>Angular</li>
                      <li>Vue.js</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="name">
                    UI Frameworks
                    <ul className="disc-list">
                      <li>Material UI</li>
                      <li>GatsbyJS</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="name">
                    Back-End
                    <ul className="disc-list">
                      <li>RESTful</li>
                      <li>Python</li>
                      <li>ASP.NET</li>
                      <li>Prismic CMS</li>
                      <li>CodeIgniter</li>
                      <li>Ruby on Rails</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="name">
                    Database Skills
                    <ul className="disc-list">
                      <li>MySQL</li>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                      <li>Amazon DynamoDB</li>
                      <li>Oracle DB</li>
                      <li>Redis</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="name">
                    Data Visualization
                    <ul className="disc-list">
                      <li>D3.js</li>
                      <li>HighCharts</li>
                      <li>AmCharts</li>
                      <li>Chart.js</li>
                      <li>ApexCharts.js</li>
                    </ul>
                  </div>
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
export default Skills;

export const SkillsFitness = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-bicycle" />
                </div>
                <div className="name">Fitness</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Agility</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Balance</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "65%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Power</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Speed</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list dotted">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">German</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Italian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "30%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Fat Burn</div>
                </li>
                <li>
                  <div className="name">Body condition</div>
                </li>
                <li>
                  <div className="name">Strength training</div>
                </li>
                <li>
                  <div className="name">Faster exercise</div>
                </li>
                <li>
                  <div className="name">Bodybuilding</div>
                </li>
                <li>
                  <div className="name">Fitness training</div>
                </li>
                <li>
                  <div className="name">Cardio training</div>
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
export const SkillsLawyer = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="skills-list">
              <ul>
                <li className="border-line-h">
                  <div className="name">Oral Communication</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Written Communication</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "65%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Analytical and Logical Reasoning</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Legal Research</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list dotted">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">German</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Italian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "30%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Client Service</div>
                </li>
                <li>
                  <div className="name">Technology Skills</div>
                </li>
                <li>
                  <div className="name">Knowledge of Substantive Law</div>
                </li>
                <li>
                  <div className="name">Legal Procedure</div>
                </li>
                <li>
                  <div className="name">Organization</div>
                </li>
                <li>
                  <div className="name">Teamwork</div>
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

export const SkillsWritter = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">Skills</div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="skills-list">
            <ul>
              <li className="border-line-h">
                <div className="name">The Ability to Communicate</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">The Power of Observation</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Reasoning and Problem Solving</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Knowledge of Grammar, Spelling</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list dotted">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-flag" />
              </div>
              <div className="name">Languages</div>
            </div>
            <ul>
              <li className="border-line-h">
                <div className="name">English</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">German</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "60%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Italian</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "30%" }} />
                </div>
              </li>
              <li>
                <div className="name">French</div>
                <div className="progress ">
                  <div className="percentage" style={{ width: "70%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Adaptability</div>
              </li>
              <li>
                <div className="name">Strong Research Skills</div>
              </li>
              <li>
                <div className="name">The Ability to Get Focused</div>
              </li>
              <li>
                <div className="name">Communicate</div>
              </li>
              <li>
                <div className="name">The Ability to Meet Deadlines</div>
              </li>
              <li>
                <div className="name">Organizational Skills</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsMusican = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">Skills</div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="skills-list">
            <ul>
              <li className="border-line-h">
                <div className="name">Motivation / Determination</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Violin Expertise</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Creativity</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Guitar Expertise</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-music" />
              </div>
              <div className="name">Read Music</div>
            </div>
            <ul>
              <li>
                <div className="name">Chords</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Intervals</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Melody</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Pitch</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">A Tight Sense of Rhythm</div>
              </li>
              <li>
                <div className="name">Rhythm is the heartbeat of all music</div>
              </li>
              <li>
                <div className="name">An Accurate Sense of Pitch</div>
              </li>
              <li>
                <div className="name">The Ability to “Jam”</div>
              </li>
              <li>
                <div className="name">An Ability to “Talk Music”</div>
              </li>
              <li>
                <div className="name">Singing in Tune</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsPhotographer = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">
        <span className="first-word">My</span> Skills
      </div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-paint-brush" />
              </div>
              <div className="name">Design</div>
            </div>
            <ul>
              <li>
                <div className="name">Logo Design</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Web Design</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Illustration</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Photography</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Website hosting</div>
              </li>
              <li>
                <div className="name">iOS and android apps</div>
              </li>
              <li>
                <div className="name">Create logo design</div>
              </li>
              <li>
                <div className="name">Design for print</div>
              </li>
              <li>
                <div className="name">Modern and mobile-ready</div>
              </li>
              <li>
                <div className="name">Advertising services include</div>
              </li>
              <li>
                <div className="name">Graphics and animations</div>
              </li>
              <li>
                <div className="name">Search engine marketing</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsPhotographerForAbout = () => {
  return (
    <div className="row">
      {/* skill item */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div className="skills-list">
          <div className="skill-title border-line-h">
            <div className="icon">
              <i className="fa fa-paint-brush" />
            </div>
            <div className="name">Software Skills</div>
          </div>
          <ul>
            <li className="border-line-h">
              <div className="name">Sketch</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Adobe Photoshop</div>
              <div className="progress">
                <div className="percentage" style={{ width: "65%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Adobe illustration</div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }} />
              </div>
            </li>
            <li>
              <div className="name">Figma</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* skill item */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div className="skills-list dotted">
          <div className="skill-title border-line-h">
            <div className="icon">
              <i className="fa fa-flag" />
            </div>
            <div className="name">Languages</div>
          </div>
          <ul>
            <li className="border-line-h">
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">German</div>
              <div className="progress">
                <div className="percentage" style={{ width: "60%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Italian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "30%" }} />
              </div>
            </li>
            <li>
              <div className="name">French</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="clear" />
    </div>
  );
};

export const SkillsClassic = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">My Skills</div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-easel" />
              </div>
              <div className="name">Design</div>
            </div>
            <ul>
              <li className="border-line-h">
                <div className="name">Web Design</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Write Music</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Photoshop</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Graphic Design</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list dotted">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-flag" />
              </div>
              <div className="name">Languages</div>
            </div>
            <ul>
              <li className="border-line-h">
                <div className="name">English</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">German</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "60%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Italian</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "30%" }} />
                </div>
              </li>
              <li>
                <div className="name">French</div>
                <div className="progress ">
                  <div className="percentage" style={{ width: "70%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-code" />
              </div>
              <div className="name">Coding</div>
            </div>
            <ul>
              <li>
                <div className="name">WordPress</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">PHP / MYSQL</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Angular / JavaScript</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">HTML / CSS</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-android-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Website hosting</div>
              </li>
              <li>
                <div className="name">iOS and android apps</div>
              </li>
              <li>
                <div className="name">Create logo design</div>
              </li>
              <li>
                <div className="name">Design for print</div>
              </li>
              <li>
                <div className="name">Modern and mobile-ready</div>
              </li>
              <li>
                <div className="name">Advertising services include</div>
              </li>
              <li>
                <div className="name">Graphics and animations</div>
              </li>
              <li>
                <div className="name">Search engine marketing</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
