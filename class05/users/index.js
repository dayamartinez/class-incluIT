const AWS = require('aws-sdk')

AWS.config.update({
	region: "us-west-1",
	endpoint: "http://localhost:8000"
})

async function getUser(){

    const DocumentClient = new AWS.DynamoDB.DocumentClient();

    const { Items } = await DocumentClient.query({
        TableName: process.env.USERS || 'users',
        KeyConditionExpression: '#id = :id',
        ExpressionAttributeNames: {
            '#id': 'userId'
        },
        ExpressionAttributeValues: {
            ':id': "1615511893898"
        }
    }).promise();
   
    return {
        statusCode: 200,
        body: JSON.stringify(Items)
    };
}

module.exports = {getUser}