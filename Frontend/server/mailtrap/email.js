import { mailtrapClient,sender } from "./mailtrap.config.js"
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js"

export const sendVerificationEmail = async (email,verificationToken) =>{
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category: "Email Verification"
        })
        console.log("Email sent successfully",response)
    } catch (error) {
        console.log(`Error sending verification`,error)
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail =  async (email,name) =>{
    

}