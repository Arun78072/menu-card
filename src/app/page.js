import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="page">
      <div className="image_section">
        <img src="menu_pages-to-jpg-0001.jpg" alt="Menu page 1" />
        <img src="menu_pages-to-jpg-0002.jpg" alt="Menu page 2" />
        <img src="menu_pages-to-jpg-0003.jpg" alt="Menu page 3" />
        <img src="menu_pages-to-jpg-0004.jpg" alt="Menu page 4" />
        <img src="menu_pages-to-jpg-0005.jpg" alt="Menu page 5" />
      </div>
      <div className="imageSection">
        {/* Location Section */}
        <div className="locationSection">
          <h1>📍 Find Us on Google Maps</h1>
          <p>
            Visit <strong>Chauhan Sweets & Vaishno Dhaba</strong> for delicious
            food and homely service. You can easily find us on Google Maps
            below.
          </p>
          <p className={styles.celebration}>
            🎊 We also have a spacious party hall available for celebrations,
            with a capacity of up to <strong>40 people</strong>.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4088.6211960151386!2d76.21758727630005!3d31.996512773999598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4708cba1284f%3A0xbf103206604f1a30!2sCHAUHAN%20SWEETS%20%2C%20FAST%20FOOD%2C%20VAISHNO%20DHABA%20and%20Guest%20house!5e1!3m2!1sen!2sin!4v1759771270301!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      
        {/* Contact Section */}
        <div className="contactSection">
          <h2>📞 Contact Us</h2>
          <p>
            <strong>Restaurant Name:</strong> Chauhan Sweets, Fast Food &
            Vaishno Dhaba
          </p>
          <p>
            <strong>Address:</strong> NH-503, Near Bangla Mukhi Mandir (Nag
            Mandir) , Kangra, Himachal Pradesh
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+919650027606"
              style={{ color: "#1d3557", textDecoration: "none" }}
            >
              +91 96500 27606
            </a>
          </p>

         
          <p className="hours">
            Open daily from <strong>8:00 AM to 10:00 PM</strong>. Visit us or
            call to reserve your table!
          </p>
        </div>
      </div>
    </div>
  );
}
