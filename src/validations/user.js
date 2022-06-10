const emailProperties = {
    type: 'string',
    pattern: '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))',
    errorMessage: {
        type: "Email should be a string",
        pattern: "Given string is not a valid email ID"
    }
}

const passwordProperties = {
    type: 'string',
    minLength: 6,
    errorMessage: {
        type: "Password should be a string",
        minLength: "Password should be at least 6 characters"
    }
}

const nameProperties = {
    type: 'string',
    pattern: "^[a-zA-Z0-9.,-_#:&\\s]+$",
    maxLength: 20,
    minLength: 4,
    errorMessage: {
        type: "First Name should be a string",
        pattern: "Should contain only letters",
        maxLength: "Max length is 20",
        minLength: "Min length is 4"
    }
}

const createUserSchema = {
    body: {
        type: 'object',
        required: [
            'firstName',
            'lastName',
            'email',
            'password'
        ],
        properties: {
            firstName: {
                type: 'string',
                pattern: "^[a-zA-Z0-9.,-_#:&\\s]+$",
                maxLength: 20,
                minLength: 4,
                errorMessage: {
                    type: "First Name should be a string",
                    pattern: "Should contain only letters",
                    maxLength: "Max length is 20",
                    minLength: "Min length is 4"
                }
            },
            lastName: {
                type: 'string',
                pattern: "^[a-zA-Z0-9.,-_#:&\\s]+$",
                maxLength: 20,
                minLength: 4,
                errorMessage: {
                    type: "Last Name should be a string",
                    pattern: "Should contain only letters",
                    maxLength: "Max length is 20",
                    minLength: "Min length is 4"
                }
            },
            email: {
                type: 'string',
                pattern: '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))',
                errorMessage: {
                    type: "Email should be a string",
                    pattern: "Given string is not a valid email ID"
                }
            },
            password: {
                type: 'string',
                minLength: 6,
                errorMessage: {
                    type: "Password should be a string",
                    minLength: "Password should be at least 6 characters"
                }
            }
        }
    }
}

const updateUserSchema = {
    body: {
        type: 'object',
        required: [
            'email',
            'password'
        ],
        properties: {
            email: emailProperties,
            password: passwordProperties
        }
    }
}

module.exports = {
    createUserSchema
}