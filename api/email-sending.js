const express = require('express');
const router = express.Router();
const config = require('../config');
const AWS = require("aws-sdk");
const nodemailer = require("nodemailer");
const sesTransport = require("nodemailer-ses-transport");

const SES_CONFIG = {
  accessKeyId: config.AWS_SES_ACCESS_KEY,
  secretAccessKey: config.AWS_SES_SECRET_ACCESS_KEY,
  region: config.AWS_SES_REGION,
};

const transporter = nodemailer.createTransport(
  sesTransport({ ses: new AWS.SES(SES_CONFIG) })
);

router.post('/', (req, res)=>{
    const mailOptions = {
        from: config.SENDER_EMAIL,
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.html,
        text: req.body.body,
        attachments: req.body.attachments,
      };
      transporter.sendMail(mailOptions).then((doc)=>{
        res.json('Email notification sent succesfully');
      }).catch((err)=>{
        res.status(500).send(err);
      })
})

module.exports = router;