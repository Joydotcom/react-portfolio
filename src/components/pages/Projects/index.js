import React from "react";
import Projects from "../Projects/projects.json";

function Project() {
  return (
    <main class="d-flex flex-column bg-light p-5">
      <section class="d-flex flex-wrap">
        {Projects.map((project) => (
          <div class="card p-3 mt-2 mb-2 d-flex flex-column flex-lg-row">
            <div>
              <h3 class="card-title">{project.title}</h3>
              <p class="card-text">{project.description}</p>
              <ul>
                <li>
                  <a class="card-link" href={project.repo}>
                    GitHub Repo
                  </a>
                </li>
                <li>
                  <a class="card-link" href={project.deployed}>
                    Deployed App
                  </a>
                </li>
              </ul>
            </div>
            <img
              src={process.env.PUBLIC_URL + project.image}
              alt={project.title}
              class="p-2"
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Project;