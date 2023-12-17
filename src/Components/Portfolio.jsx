/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/windmill.jpg";

const imageAltText = "A windmill with a full moon at the background in a beautiful morning";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Open Source Contributor 🎉",
    description: "Collaboration to translate a Codespaces template for teaching JavaScript.",
    url: "https://github.com/education/codespaces-teaching-js-template",
  },
  {
    title: "Repository to learn Python  💻🚀✨",
    description: "Contribution for the learning of Python providing a repository that cover 54 topics distributed in 162 exercises. All these exercises are provided both in English and Spanish. The repository is open to contributions.",
    url: "https://github.com/Charlie-techLab/PythonTopics",
  },
  {
    title: "Proyecto Lab UCA 🌎🖥", 
    description: "Collaboration for a system to manage the informatic labs in my university.",
    url: "https://github.com/ProyectoLabUCA",
  },
  {
    title: "AZ-900 | Microsoft Azure Fundamentals certified and instructor from Microsoft Learn Student Ambassadors ☁️",
    description: "My badge contribution as a mentor for the Train the Trainer program.",
    url: "992698331",
  },
  {
    title: "Participation in an interview by DevRel University  🎥 ",
    description:
      "Video interview about learnings, ideas and reflections about the DevRel for Ambassadors series.",
    url: "https://www.youtube.com/watch?v=Z04WeRhBrnc",
  },
  {
    title: "Investigation about 4 new algorithms  🧮💡📚 ",
    description:
      "This investigation was fueled by a deep curious and persistance.",
    url: "https://onedrive.live.com/view.aspx?resid=C6473428C6667E36%21305&authkey=!AAh_Byiz-dkesZM",
  },
  {
    title: "Ambassadors Projects Team Lead  🌎 ✨",
    description:
      "View my verified achievement from Microsoft MVP and Student Ambassadors Communities.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7142273756349034496/",
  },
  {
    title: "Ambassadors Projects Participant 📚🎉💻",
    description:
      "View my verified achievement from Microsoft MVP and Student Ambassadors Communities.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7142270589867552768/",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
