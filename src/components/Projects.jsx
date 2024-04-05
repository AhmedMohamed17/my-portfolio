import ProBox from "./ProBox";
import todo from "../images/todo.jpg";
import twitter from "../images/twitter.jpg";
import movieapp from "../images/movieapp.jpg";
import inta from "../images/insta.jpg";
import lego from "../images/lego.jpg";
import grad from "../images/graduation.png";
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
                title="Dental Lab"
                img={grad}
                description="The web application serves as a liaison among dentists, hospitals, and dental labs, offering streamlined communication and order management between dentists and labs, alongside an Advanced Resource Planning (ARP) system tailored for dental labs, ultimately simplifying ordering processes and enhancing communication between all involved parties."
                techno1="MERN"
                techno2="STACK"
                code=""
                demo="https://dentech-seven.vercel.app/jobs"
              />
              <ProBox
                title="Instagram Clone"
                img={inta}
                description="A simulated Instagram website. Dive into the world of social media where you can discover the latest trends, explore captivating images and videos, connect with friends and influencers."
                techno1="JQuery"
                techno2="CSS"
                code="https://github.com/AhmedMohamed17/Fake-instagram"
                demo="https://nimble-gumption-c941c1.netlify.app/"
              />
              <ProBox
                title="Twitter clone"
                img={twitter}
                description="A simulated social media platform designed to mimic the functionality and user experience of the popular microblogging site."
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
              <ProBox
                title="Movie-App"
                img={movieapp}
                description="A website showcasing the newest movies and TV series. Dive into a world of entertainment where you can discover the hottest releases, explore detailed information about each title."
                techno1="Vanilla JS"
                techno2="CSS"
                code="https://github.com/AhmedMohamed17/Movie-App"
                demo="https://ahmedmohamed17.github.io/Movie-App/"
              />

              <ProBox
                title="Blog Site"
                img={lego}
                description="a MERN stack-powered blog site inspired by Lego. Immerse yourself in a world of creativity and imagination where you can explore captivating articles.
                (Please note that this website is still under construction)"
                techno1="MERN"
                techno2="STACK"
                code="https://github.com/AhmedMohamed17/Blog-App"
                demo=""
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
