// Path Module: It provides utilities for working with file and directory paths.

const path = require("path");

console.log("Directory Name: ", path.dirname(__filename));
console.log("File Name: ", path.basename(__filename));
console.log("File Extension: ", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Join Path: ", joinPath);

const resolvePath = path.resolve("/user", "documents", "node", "projects");
console.log("Resolve Path: ", resolvePath);

const normalizePath = path.normalize("/user/documents/node/../projects");
console.log("Normalize Path: ", normalizePath);
