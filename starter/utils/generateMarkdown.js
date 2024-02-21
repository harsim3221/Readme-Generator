// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  [![license](https://img.shields.io/badge/license-${data}-blue.svg))]
  ## Table of Contents
  - [ Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Demo](#demo)
  - [Contact Information](#contact-information)


  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.test}
  ## Demo:
  ${data.video}
  ## Contact Information:
  - Github: [${data.github}] (https://github.com/${data.github})
  - Email: [${data.email}] (mailto: harsim3221@gmail.com)
  `;
}

module.exports = generateMarkdown;
