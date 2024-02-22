// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License:
  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)  
  - [Contact Information](#contact-information)


  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}
   For more information regarding license
  [License Documentation](https://choosealicense.com/licenses/)

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.test}

  ## Contact Information:
  - Github: [${data.github}] (https://github.com/${data.github})
  - Email: [${data.email}] (mailto: harsim3221@gmail.com)
  `;
}

module.exports = generateMarkdown;
