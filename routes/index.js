const smsController = require("../controllers/sms");
const {sendSMSSchema} = require("../schema/sms");
const {sendEmailSchema} = require("../schema/email");

module.exports =  [
    {
        method: "GET",
        url: "/",
        handler: async () => {
            return {hello: "world"}
        }
    },
    {
        method: "POST",
        url: "/api/v1/sms",
        handler: smsController.sendSMS,
        schema: sendSMSSchema
    },
    {
        method: "POST",
        url: "/api/v1/email",
        handler: null,
        schema: sendEmailSchema
    }
];