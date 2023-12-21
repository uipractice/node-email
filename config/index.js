const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    AWS_SES_ACCESS_KEY: process.env.AWS_SES_ACCESS_KEY,
    AWS_SES_SECRET_ACCESS_KEY: process.env.AWS_SES_SECRET_ACCESS_KEY,
    AWS_SES_REGION: process.env.AWS_SES_REGION,
    SENDER_EMAIL: process.env.SENDER_EMAIL
}