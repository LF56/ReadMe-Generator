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
    return `[${license}]()`
  } else if (license === 'Apache'){
    return `[${license}]()`
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

# Description
${data.projectDescription}

# License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
