import config from "@config/sms";
import { Vonage } from "@vonage/server-sdk";
import { Auth } from "@vonage/auth";
const env = config.vonage;
const VONAGE_API_KEY = env.apiKey;
const VONAGE_API_SECRET = env.apiSecret;
const TO_NUMBER = env.toNumber;
const VONAGE_BRAND_NAME = env.brandName;
import citizen_otp from "@views/templates/sms/citizen_otp";
const vonage = new Vonage(
  new Auth({
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET,
  })
);

const from = VONAGE_BRAND_NAME;
const to = TO_NUMBER;
const text = "A text message sent using the Vonage SMS API";

export async function sendSMS(text: string) {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
}

// sendSMS(citizen_otp("1236"));
