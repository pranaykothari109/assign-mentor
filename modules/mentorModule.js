const mentorModel = require('../models/mentorSchema');

//Getting list of all mentors
exports.getMentors = async (req, res) => {
    try {
        const mentors = await mentorModel.find({});
        res.send(mentors);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

//Getting mentor by id
exports.getMentor = async (req, res) => {
    try {
        const mentor = await mentorModel.findById(req.params.id);
        res.send(mentor);
    } catch (err) {
        log.error(err.message);
        res.status(500).send(err.message);
    }
}

//Creating mentor
module.exports.createMentor = async (req, res) => {
    try {
        const body = {...req.body};
        const mentor = new mentorModel(body);
        const response = await mentor.save()
        res.send(response);
        console.log(body)
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}


