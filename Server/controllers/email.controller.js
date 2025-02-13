const Email = require("../models/email.model");

exports.createEmail = async (req, res) => {
    try {
        const userId = req.id;
        const {to, subject, message } = req.body
        if(!to || !subject || !message){
            res.status(400).json({message : "All fields required"})
        } 
        const email = await Email.create({
            to,
            subject,
            message,
            userId
        });
        res.status(201).json({message : "Email created", email})
    } catch (error) {
        console.log(error)
    }
}

exports.deleteEmail = async (req, res) => {
    try {
        const emailId = req.params.id;
        if(!emailId){
            res.status(400).json({message : "Email id is required"})
        }
        const email = await Email.findByIdAndDelete(emailId)
        if(!email) res.status(400).json({message : "Email not found"})

            res.status(200).json({message : "Email deleted successfully"})
    } catch (error) {
        console.log(error)
    }
}

exports.getAllEmailById = async (req, res) => {
    try {
        const userId = req.id;
        const email = await Email.find({userId})
        
        res.status(200).json({email})
    } catch (error) {
        console.log(error)
    }
}