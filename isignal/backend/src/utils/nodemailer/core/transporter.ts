import transporter from "@utils/nodemailer/core/oauth_client";
import logEvents from "@utils/logger/loggerUtil";

const errorSendEmail = "Erreur lors de l'envoi de mail.";

export default async (options: any) => {
  try {
    const emailTransporter = await transporter();

    if (emailTransporter) {
      const sendEmail = await emailTransporter
        .sendMail(options)
        .then(() => ({ success: true, data: null }))
        .catch((err) => {
          logEvents(`${errorSendEmail} ${err}`);
          return { success: false, data: err };
        });

      if (!sendEmail.success) false;
    } else {
      return false;
    }
  } catch (err) {
    logEvents(`Nodemailer transporter error. ${err}`);
  }

  return true;
};
