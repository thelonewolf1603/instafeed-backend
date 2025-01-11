const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config()


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
  });
  
  // Configure Multer-S3 for file uploads
  const upload = multer({
    storage: multerS3({
      s3,
      bucket: process.env.S3_BUCKET,
      acl: 'public-read', // Set access control, e.g., 'private' or 'public-read'
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
        cb(null, `uploads/${Date.now()}_${file.originalname}`);
      },
    }),
  });


  module.exports = upload