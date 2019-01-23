const smsController = require("../controllers/sms");
const smsSchema = require("../schema/sms");

module.exports =  [
    {
        method: "GET",
        url: "/",
        handler: async (req, res) => {
            return {hello: "world"}
        }
    },
    {
        method: "POST",
        url: "/api/v1/sms",
        handler: smsController.sendSMS,
        schema: smsSchema.sendSMSSchema
    }
];