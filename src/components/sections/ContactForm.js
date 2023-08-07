import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const sendMail = async () => {
    const url = "https://api.emailjs.com/api/v1.0/email/send";
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        service_id: "service_cd969e1",
        template_id: "template_xx2shbi",
        user_id: "bIqyAYFflbIwwmHcw",
        template_params: {
          from_name: name,
          from_email: email,
          message: msg,
        },
      }),
    };
    try{
    const res = await fetch(url, options);
    console.log(res)
    setName('');
    setEmail("");
    setMsg("");
    setSuccess(true)
    } catch(e) {
      console.log('Error:', e)
    }
  }

  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Contact Form</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="contact_form">
            <form id="cform" method="post">
              <div className="row">
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input
                      type="text"
                      name="name"
                      id="full-name"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input
                      type="email"
                      name="email"
                      id="user-email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col col-d-12 col-t-12 col-m-12">
                  <div className="group-val">
                    <textarea
                      name="message"
                      id="user-message"
                      placeholder="Your Message"
                      defaultValue={""}
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="align-left">
                <a href="#" className="button" onClick={sendMail}>
                  <span className="text">Send Message</span>
                  <span className="arrow" />
                </a>
              </div>
            </form>
            <div className="alert-success" style={{display: success ? 'block' : 'none'}}>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactForm;
