"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = require("aws-sdk");
const s3 = new aws_sdk_1.S3();
const handler = async (event) => {
    const bucketName = 'lambda-s3-upload';
    const fileName = 'test.txt';
    const fileContent = 'Hello, World!';
    try {
        await s3.putObject({
            Bucket: bucketName,
            Key: fileName,
            Body: fileContent,
        }).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'File uploaded successfully.' }),
        };
    }
    catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'File upload failed.' }),
        };
    }
};
exports.handler = handler;
