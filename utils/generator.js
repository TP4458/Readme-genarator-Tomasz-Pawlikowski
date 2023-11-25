const generateReadme = (input) => {
return `
# ${input.title}

## Description
${input.description}

${input.generateBadge}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

## Installation
${input.install}

## Usage
${input.use}

## Contributing
${input.contribute}

## Tests
${input.test}

## Questions
Any questions regarding this project can be directed to:
* Email: [${input.email}](${input.email})
* GitHub [${input.gitName}](https://github.com/${input.gitName})

## License
Click on the badge below or near the top of this document, to find out more about the license for this product.
\n${input.generateBadge}
`
}

export { generateReadme };
