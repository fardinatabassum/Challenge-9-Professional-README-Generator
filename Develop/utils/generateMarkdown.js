// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license ) {
  let badge = ''
  if (license == 'MIT License'){
    badge = '[![License MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license == 'Apache License 2.0'){
    badge = '[![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/license/apache-2-0/)'
  }else if (license == 'Mozilla Public License 2.0'){
    badge = '[![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_2.0-green.svg)](https://opensource.org/license/mpl-2-0/)'
  }else if (license == "ISC"){
    badge = '[![ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://choosealicense.com/licenses/isc/)'
  }else{
    badge = ''
  }
  return badge
} 

function renderLicenseLink(license) {
  let licenseLink = '' 
  if (license == 'MIT License'){
    licenseLink = '[MIT](https://choosealicense.com/licenses/mit/)'
  }else if (license == 'Apache License 2.0'){
    licenseLink = '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)'
  }else if (license == 'Mozilla Public License 2.0'){
    licenseLink = '[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)'
  }else if (license == "ISC"){
    licenseLink = '[ISC](https://choosealicense.com/licenses/isc/)'
  }else{
    licenseLink = ''
  }
  return licenseLink

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(data.license === "None") {
//     return "" ;
//   } else {
//     return `## License
//     ${renderLicenseBadge(license)}`
//   }
// }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # ${renderLicenseBadge(data.license)}
  
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
  Uses the ${renderLicenseLink(data.license)} license
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  https://github.com/${data.github}
  
  For further inquiries reach me at ${data.email}
  
  ### Live Site: https://gituhb.com/${data.github}/${data.title}
  
  `;
}

module.exports = generateMarkdown;
