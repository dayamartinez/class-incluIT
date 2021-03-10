const AWS = require('aws-sdk')

AWS.config.update({
	region: "us-west-1",
	endpoint: "http://localhost:8000"
})

async function getUser(event, context){

    const DocumentClient = new AWS.DynamoDB.DocumentClient()

    const { Data } = DocumentClient.query({
        TableName: process.env.USERS || 'users',
        KeyConditionExpression: '#id = :id',
        ExpressionAttributeNames: {
            '#id': 'userId'
        },
        ExpressionAttributeValues: {
            ':id': event.body.userId
        }
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(Data)
    }

}

module.exports = {getUser}