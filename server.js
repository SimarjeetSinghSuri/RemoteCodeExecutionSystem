const express = require('express');
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

AWS.config.update({ region: 'your-region' });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// Signin Route
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const params = {
        TableName: 'Users',
        Key: { email: email },
    };

    try {
        const data = await dynamoDb.get(params).promise();

        if (data.Item && bcrypt.compareSync(password, data.Item.password)) {
            res.status(200).json({ message: 'Sign in successful!' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
