const Ajv = require('ajv').default;
const AjvErrors = require('ajv-errors');

const ajv = new Ajv({
  allErrors: true,
  jsonPointers: true,
});

AjvErrors(ajv);
module.exports = ajv;