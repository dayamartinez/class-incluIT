const jwt = require('jwt-simple')

async function createToken(event){

    const payload = typeof event.body === 'string' ? JSON.parse(event.body) : event.body

    payload.userId = Date.now().toString()

    const token = jwt.encode({
        userId: payload.userId
        }, 'secret' )

    return {
        statusCode: 200,
        body: JSON.stringify({ token })
    }
}

async function validateToken(event){
    const token = event.headers.authorization || '';   

    try {
       jwt.decode(token, 'secret');

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Welcome`
            })
        };
    }
    catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Could not validate token'
            })
        };
    }

}

module.exports = {createToken, validateToken}