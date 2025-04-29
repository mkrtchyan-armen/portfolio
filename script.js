$(document).ready(function() {
  const projects = [
    {
      name: "Project Alpha",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/alpha",
      description: "A captivating game about exploring ancient ruins and solving puzzles."
    },
    {
      name: "Web App Beta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/beta",
      description: "A modern web application for managing tasks and collaborating with teams."
    },
    {
      name: "Mobile Game Gamma",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/gamma",
      description: "An addictive mobile game with stunning graphics and challenging gameplay."
    },
    {
      name: "Project Delta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/delta",
      description: "A desktop application designed for video editing and post-production."
    },
    {
      name: "Web Application Epsilon",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/epsilon",
      description: "A web platform for online education with interactive courses and resources."
    },
    {
      name: "Project Zeta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/zeta",
      description: "A strategic game where players build empires and compete for resources."
    },
    {
      name: "App Eta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/eta",
      description: "A fitness application to help users track their workouts and nutrition intake."
    },
    {
      name: "Game Theta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/theta",
      description: "An adventure game full of magical creatures and epic quests."
    },
    {
      name: "Web Tool Iota",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/iota",
      description: "A web-based tool that simplifies complex data analysis and visualization."
    },
    {
      name: "Mobile App Kappa",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/kappa",
      description: "A mobile application designed for easy photo sharing and social networking."
    },
    {
      name: "Application Lambda",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/lambda",
      description: "A desktop application providing advanced features for audio recording and editing."
    },
    {
      name: "Project Mu",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/mu",
      description: "A simulation game where players manage their own virtual ecosystems."
    },
        {
      name: "Project Alpha",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/alpha",
      description: "A captivating game about exploring ancient ruins and solving puzzles."
    },
    {
      name: "Web App Beta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/beta",
      description: "A modern web application for managing tasks and collaborating with teams."
    },
    {
      name: "Mobile Game Gamma",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/gamma",
      description: "An addictive mobile game with stunning graphics and challenging gameplay."
    },
    {
      name: "Project Delta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/delta",
      description: "A desktop application designed for video editing and post-production."
    },
    {
      name: "Web Application Epsilon",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/epsilon",
      description: "A web platform for online education with interactive courses and resources."
    },
    {
      name: "Project Zeta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/zeta",
      description: "A strategic game where players build empires and compete for resources."
    },
    {
      name: "App Eta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/eta",
      description: "A fitness application to help users track their workouts and nutrition intake."
    },
    {
      name: "Game Theta",
      thumbnail: "https://via.placeholder.com/300x200",
      website: "https://www.example.com/theta",
      description: "An adventure game full of magical creatures and epic quests."
    },
    // Add more project objects here
  ];

  const gridContainer = $(".grid-container");

  projects.forEach(project => {
    const tile = `
      <div class="project-tile">
        <div class="project-tile-inner">
          <div class="project-tile-front">
            <img src="${project.thumbnail}" alt="${project.name}">
            <h3>${project.name}</h3>
          </div>
          <div class="project-tile-back">
            <p>${project.description}</p>
            <a href="${project.website}" class="project-button" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    `;

    gridContainer.append(tile);
  });

  // Add click handler for flipping the tile
  $(".project-tile").click(function() {
    $(this).toggleClass("flipped");
  });
});
