// If no license is chosen, return empty string
function renderLicenseBadge(license) {
  if(license === 'none') {
    return ""
  }
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  if(license === 'IBM Public License Version 1.0'){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if(license === 'Mozilla Public License 2.0'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  if(license === 'The Perl License'){
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  }
  else {
    return ""
  }
} 

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none')
    return ""
  else if(license === 'MIT')
    return `https://opensource.org/licenses/MIT`
  else if(license === 'Apache 2.0 License')
    return `https://opensource.org/licenses/Apache-2.0`
  else if(license === 'Boost Software License 1.0')
    return `https://www.boost.org/LICENSE_1_0.txt`
  else if(license === 'IBM Public License Version 1.0')
    return `https://opensource.org/licenses/IPL-1.0`
  else if(license === 'Mozilla Public License 2.0')
    return `https://opensource.org/licenses/MPL-2.0`
  else if(license === 'The Perl License')
    return `https://opensource.org/licenses/Artistic-2.0`
  else
    return ""
}

// function to generate markdown for README
function generateMarkdown(data) {
return `# <${data.repoName}>

## ${data.repoName}

## License

${renderLicenseBadge(data.license)}

<p><a href="${renderLicenseLink(data.license)}">Documentation on ${data.license}, or you can click the badge above.</a><p>

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Tests](#tests)
  - [Contributions](#contributions)
  - [License](#license)
  - [Questions](#questions)

  ## Description

  <ul>
  <li> ${data.description} </li>
  <li> ${data.motivation} </li>
  <li> ${data.projectGoal} </li>
  </ul>
  
  ## Installation
  ${data.installation}

  ## Usage
  <p>${data.usage}</p>

  ## Contributions
  <p>${data.contributions}</p>

  ## Tests
  <p>${data.tests}</p>

  ## Questions

  For additional information on my developments and projects, please see my GitHub profile at:
  <p><a href="https://www.github.com/${data.gitHubName}">${data.gitHubName}'s Profile</a></p>
  For additional questions, please feel free to send me a message below:
  <p><a href="mailto: ${data.email}">Send Message</a></p>
  `
}

module.exports = generateMarkdown;
