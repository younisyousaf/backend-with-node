// NPM -> Node Package Manager -> Used to manage third party packages in Node.js

// Dependencies: All the packages that are required for the project in the production environment.
// DevDependencies: All the packages that are required for the project in the development/local environment.

// npm init -> To create a package.json file
// npm install -> To install a package
// npm install <package-name> -> To install a package
// npm install <package-name> --save -> To install a package and save it in the dependencies
// npm install <package-name> --save-dev -> To install a package and save it in the devDependencies
// npm uninstall <package-name> -> To uninstall a package
// npm update -> To update all the packages
// npm update <package-name> -> To update a specific package
// npm outdated -> To check the outdated packages
// npm audit -> To check the security vulnerabilities
// npm audit fix -> To fix the security vulnerabilities
// npm list -> To list all the packages
// npm list --depth=0 -> To list all the packages without the dependencies
// npm list --depth=1 -> To list all the packages with one level of dependencies
// npm list --depth=2 -> To list all the packages with two levels of dependencies
// npm list --global -> To list all the global packages
// npm list --json -> To list all the packages in JSON format
// npm list --parseable -> To list all the packages in parseable format
// npm list --long -> To list all the packages in long format
// npm list --prod -> To list all the production dependencies
// npm list --dev -> To list all the dev dependencies
// npm install <package-name> --global -> To install a package globally
// npm uninstall <package-name> --global -> To uninstall a package globally
// npm update --global -> To update all the global packages
// npm update <package-name> --global -> To update a specific global package
// npm install <package-name> --save -> To install a package and save it in the dependencies
// npm install <package-name> --save-dev -> To install a package and save it in the devDependencies
// npm install <package-name> --save-prod -> To install a package and save it in the productionDependencies
// npm install <package-name> --save-dev -> To install a package and save it in the devDependencies
// npm install <package-name> --save-prod --save-dev -> To install a package and save it in the productionDependencies and devDependencies

const lodash = require("lodash");

const names = ["John", "Bob", "Alice", "Jane", "Doe"];

console.log(lodash.shuffle(names)); // [ 'Bob', 'Jane', 'Alice', 'John', 'Doe' ]
