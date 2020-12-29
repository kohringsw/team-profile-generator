const generateHTML = function () {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
      />
      <link rel="stylesheet" href="src/style.css" />
    </head>
    <body>
      <div class="header">
        <div class="jumbotron bg-dark">
          <h1 class="display-4 text-white text-center font-weight-bold">
            TEAM DIRECTORY
          </h1>
        </div>
      </div>
      <div class="container-body container-fluid">
        <div class="row">${teamString}</div>
      </div>
      <script src="https://kit.fontawesome.com/257de25400.js"></script>
      </body>
    </html>
    `;
};

// Generates a card profile for each employee based on class
const generateCard = function (array) {
  // to allow font awesome icons to change for each role
  let roleIcon;
  // display user input
  let roleInput;

  if ((array.role = "Manager")) {
    roleIcon = `<i class="fas fa-mug-hot"></i>`;
    roleInput = `Office Number: ${array.officeNumber}`;
  } else if (array.role === "Engineer") {
    roleIcon = `i< class="fas fa-glasses"></i>`;
    roleInput = `GitHub Username: ${array.github}`;
  } else if (array.role === "Intern") {
    roleIcon = `i< class="fas fa-user-graduate"></i>`;
    roleInput = `School: ${array.school}`;
  }

  return `<div class="col-md-4 col-sm-6 col-12 col-lg-3">
  <div class="card shadow mb-5 bg-white rounded">
    <div class="card-header bg-info">
      <h4 class="text-white text-center mb-3 mt-2">${array.name}</h4>
      <h4 class="text-white text-center">
        <i ${roleIcon}></i> ${array.role}
      </h4>
    </div>
    <div class="card-body">
      <ul class="list-unstyled">
        <li class="mb-3">Employee ID: ${array.id}</li>
        <li class="mb-3">Email: ${array.email}</li>
        <li class="mb-3">${roleInput}</li>
      </ul>
    </div>
  </div>
</div>
  `;
};

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;