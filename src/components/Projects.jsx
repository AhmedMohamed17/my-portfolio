import ProBox from "./ProBox";
import ahmed from "../images/ahmed.jpg";
import todo from "../images/todo.jpg";
import twitter from "../images/twitter.jpg";
import movieapp from "../images/movieapp.jpg";

import React from "react";

function Projects() {
  return (
    <React.Fragment>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>Projects</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Car Rental"
                img={ahmed}
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/stefvndev/car-rental"
                demo="https://car-rental-ten.vercel.app/"
              />

              <ProBox
                title="Movie-App"
                img={movieapp}
                description="Introducing our latest project: a website showcasing the newest movies and TV series. Dive into a world of entertainment where you can discover the hottest releases, explore detailed information about each title."
                techno1="Vanilla JS"
                techno2="CSS"
                code="https://github.com/AhmedMohamed17/Movie-App"
                demo="https://ahmedmohamed17.github.io/Movie-App/"
              />

              <ProBox
                title="Movie-App"
                img={movieapp}
                description="Introducing our latest project: a website showcasing the newest movies and TV series. Dive into a world of entertainment where you can discover the hottest releases, explore detailed information about each title."
                techno1="Vanilla JS"
                techno2="CSS"
                code="https://github.com/AhmedMohamed17/Movie-App"
                demo="https://ahmedmohamed17.github.io/Movie-App/"
              />

              <ProBox
                title="Twitter clone"
                img={twitter}
                description="Introducing Fake Twitter Project: A simulated social media platform designed to mimic the functionality and user experience of the popular microblogging site."
                techno1="Vanilla JS"
                techno2="CSS"
                code="https://github.com/AhmedMohamed17/Twitter"
                demo="https://fake-twitter-ten.vercel.app/"
              />

              <ProBox
                title="TO-DO List"
                img={todo}
                description="Here's a simple To-Do List app written in React to help you manage your tasks."
                techno1="React"
                techno2="Hooks"
                code="https://github.com/AhmedMohamed17/To-Do-list"
                demo="https://delicate-crisp-9ec82b.netlify.app/"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
