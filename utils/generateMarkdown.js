// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'N/A' ){
    return ''
  } else {
    return `![${license}](https://img.shields.io/badge/License-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A' ){
    return ''
  } else if (license === 'MIT'){
    return `[${license}](https://opensource.org/licenses/MIT)`
  } else if (license === 'GPL'){
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } else if (license === 'Apache'){
    return `[${license}](https://www.apache.org/licenses/LICENSE-2.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}


  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Install)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)

# Description
${data.projectDescription}

# Install
${data.projectInstall}

# Usage
${data.projectUsage}

# License
${renderLicenseSection(data.license)}

# Contribution
${data.confirmAddContribution}

# Test 
${data.projectTest}

# Questions

Email me for contact/questions: ${data.questions}

Connect with me on GitHub: ${data.githubUser} (https://github.com/${data.githubUser})



`;
}

module.exports = generateMarkdown;
