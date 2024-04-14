import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            "At DELICIOUS, we are passionate about providing a seamless dining experience through our innovative reservation platform. Our team is dedicated to crafting a user-friendly interface that empowers both diners and restaurants alike. With a focus on convenience, reliability, and efficiency, we strive to connect food enthusiasts with their favorite culinary destinations effortlessly. By leveraging cutting-edge technology and a commitment to excellence, we aim to revolutionize the way people discover and book dining experiences. Whether you're a diner seeking the perfect table or a restaurant looking to optimize your reservations, DELICIOUS is here to simplify the process and elevate your dining journey."
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
