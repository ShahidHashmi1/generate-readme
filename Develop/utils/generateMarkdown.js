// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none')
    return ""
  else if(license === 'MIT')
    return `![license badge](https://img.shields.io/badge/License-MIT-brightgreen)`
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# <${data.repoName}>

## License

  <p>${renderLicenseBadge(data.license)}</p>

  ## ${data.repoName}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Mock Up](#mock-up)
  - [Submission](#submission)
  - [Tests](#tests)
  - [Contribution](#contribution)
  - [Credits](#credits)
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
  <br>
  For additional questions, please feel free to send me a message below:
  <p><a href="mailto: ${data.email}">Send Message</a></p>
  `

}

module.exports = generateMarkdown;
