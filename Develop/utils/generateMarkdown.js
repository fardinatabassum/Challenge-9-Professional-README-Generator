// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const badges = {
    MIT: '[![License MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[Apache License 2.0](https://img.shields.io/badge/License-Apache 2.0-green.svg)(https://opensource.org/license/apache-2-0/)',
    Mozilla: '[Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla 2.0-green.svg)(https://opensource.org/license/mpl-2-0/)',
    ISC: '[ISC](https://img.shields.io/badge/License-ISC-blue.svg)(https://choosealicense.com/licenses/isc/)'

  }
  return badges[data]
  } 
  // check if data.license is none, return nothing, else return the badge needed

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { 
  const licenseLinks = {
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
    Apache: '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)',
    Mozilla: '[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)',
    ISC: '[ISC](https://choosealicense.com/licenses/isc/)'

  }
  return licenseLinks[data]
  //
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(license === "None") {
    return '';
  } else {
    // return `${this.renderLicenseLink(data)}`
    return `# License ${renderLicenseBadge(data)}`
  }
}



// ${renderLicenseSection(data.license)}
// # ${this.renderLicenseBadge(data)}
/// ### Live Site: https://gituhb.com/${data.github}/${data.title}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Credits

${data.credits}

## License

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

https://github.com/${data.github}

'For further inquiries reach me at ${data.email}'


`;
}

module.exports = generateMarkdown;
