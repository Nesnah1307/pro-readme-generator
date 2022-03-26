// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licensePicked) {
 
  if (licensePicked === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } 
  
  else if (licensePicked === 'GNU') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }

  else if (licensePicked === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }

  else if (licensePicked === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }

  else if (licensePicked === 'IBM') {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
  }

  else if (licensePicked === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  }

  else if (licensePicked === 'Open Source') {
    return `![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)`;
  }

  else {
    return '';
  }
 };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licensePicked) {
  if (licensePicked === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  }

  else if (licensePicked === 'GNU') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  }

  else if (licensePicked === 'Apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  }

  else if (licensePicked === 'ISC') {
    return `(https://opensource.org/licenses/ISC)`;
  }

  else if (licensePicked === 'IBM') {
    return `(https://opensource.org/licenses/IPL-1.0)`;
  }

  else if (licensePicked === 'Mozilla') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  }

  else if (licensePicked === 'Open Source') {
    return `(https://github.com/ellerbrock/open-source-badges/)`;
  }

  else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensePicked) {
  if (!licensePicked == !licensePicked) {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Credits](#credits)
  
  * [License](#license)
  
  * [Contributors](#contributors)
  
  * [Testing](#testing)
  
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Testing
  ${data.tests}
  
  ## Questions?
  
  [https://github.com/${data.userName}](https://github.com/${data.userName})

  ${data.email}

`;
}

module.exports = generateMarkdown;
