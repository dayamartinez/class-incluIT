const Schemy = require('schemy')
const AWS = require('aws-sdk')

AWS.config.update({
    region: "us-west-1",
	endpoint: "http://localhost:8000"
})

 const userSchema = new Schemy({
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    });

async function validateAndCreate(event, context){
    const DocumentClient = new AWS.DynamoDB.DocumentClient();

    const payload = typeof event.body === 'string' 
                    ? JSON.parse(event.body) : event.body

    payload.userId = Date.now().toString();

    if(!userSchema.validate(payload)){
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: userSchema.getValidationErrors()
            })
        }
    }

    await DocumentClient.put({
        TableName: process.env.USERS || 'users',
        Item: payload
    }) 

    return {
        statusCode: 200,
        body: JSON.stringify(payload)
    }
}

module.exports = {validateAndCreate};