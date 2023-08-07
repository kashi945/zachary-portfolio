const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              src="https://maps.google.com/maps?q=8031%20Red%20Leaf%20Way%20Knoxville,%20TN%2037923%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Address . . . . .</strong> 8031 Red Leaf Way Knoxville, TN 37923 USA
              </li>
              <li>
                <strong>Email . . . . ..</strong> zachreynolds54@gmail.com
              </li>
              <li>
                <strong>Phone . . . . .</strong> +18654154065
              </li>
              <li>
                <strong>Freelance . . . . .</strong> Available
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
