/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");
const { publicUser } = require("./model/publicUser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/talk-to-us", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const notesSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { collection: "responses" }
);

const Note = mongoose.model("Note", notesSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/TalkToUs.jsx");
});

app.get("/", (req, res) => {
  res.send("Backend Server Runnnig");
});



app.post("/", function (req, res) {
  let newNote = new Note({
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    workEmail: req.body.workEmail,
    brandWebsite: req.body.brandWebsite,
    campaignBudget: req.body.campaignBudget,
    campaignStartDate: req.body.campaignStartDate,
    howDidYouHear: req.body.howDidYouHear,
    campaignObjective: req.body.campaignObjective,
  });
  newNote
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => res.status(500).send(err));
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "marketing@houseofmarktech.com", // Replace with your email
    pass: "qipw jimu taij lthn", // Replace with your email password
  },
});
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    await transporter.sendMail({
      from: '"House of Marktech" <marketing@houseofmarktech.com>',
      to: email,
      subject: "Subscription Confirmation ",
      text: "Welcome to HOM, Thank you for subscribing, We're honoured to have you on board.",
      html: "<b>Welcome to HOM, Thank you for subscribing, We're honoured to have you on board.</b>",
    });
    let user = await publicUser.findOne({
      email: { $regex: new RegExp(`^${email}$`, "i") },
    });
    if (user) {
      return next(
        new ErrorHandler("Email already exist", 409)
      );
    }
    user = await publicUser.create({
      email,
    });
    res.status(200).json({
       message: "Subscription Successful",
       data:{
          user
       }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error processing subscription" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
