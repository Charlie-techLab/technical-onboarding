/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mountain.jpg";

const imageAltText = "A beautiful sunset in an idilic place";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I love creativity, invent, discover, break paradigms and never stop to learn. I enjoy meeting new people and have new experiences. I want to use my full potential doing many tech projects and discover new ways of thinking and doing things.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "Microsoft Azure",
  "C++",
  "Research skills",
  "Creative thinking",
  "Practical thinking",
  "Growth mindset",
  "Leadership, teamwork & communication skills",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I invite you to travel to the future through the time machine called vision which works with the powerful engine of imagination, the twinkling energy of ideas and the brilliant flame of curiosity.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
