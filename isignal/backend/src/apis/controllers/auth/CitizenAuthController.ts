import {
  CitizenRegisterDataType,
  OtpVerificationType,
} from "@apis/schemas/auth/citizen/citizenAuthType";
import CitizenAuthService from "@apis/services/auth/citizen/CitizenAuthService";
import httpMsg from "@utils/http/httpMessageUtil";
import { sendSMS } from "@utils/sms/vonage/vonage";
import citizen_otp from "@views/templates/sms/citizen_otp";

import { Response, Request } from "express";
export default class CitizenAuthController {
  public static readonly handleCitizenRegister = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const data: CitizenRegisterDataType = req.body;

    try {
      const codes = await CitizenAuthService.registerCitizen(data);

      sendSMS(citizen_otp(codes.otpCode));
      const response = httpMsg.http200(codes);
      res.status(response.httpStatusCode).json(response.data);
    } catch (error) {
      const response = httpMsg.http401({
        message: (error as any).message,
      });
      res.status(response.httpStatusCode).json(response.data);
    }
  };
  public static readonly verifyOtp = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const data: OtpVerificationType = req.body;

    try {
      const payload = await CitizenAuthService.verifyOTP(data);

      const response = httpMsg.http200(payload);
      res.status(response.httpStatusCode).json(response.data);
    } catch (error) {
      const response = httpMsg.http401({
        message: (error as any).message,
      });
      res.status(response.httpStatusCode).json(response.data);
    }
  };
  public static readonly handleCitizenLogin = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const contact = req.body;

    try {
      const codes = await CitizenAuthService.loginCitizen(contact);
      sendSMS(citizen_otp(codes.otpCode));

      const response = httpMsg.http200(codes);
      res.status(response.httpStatusCode).json(response.data);
    } catch (error) {
      const response = httpMsg.http401({
        message: (error as any).message,
      });
      res.status(response.httpStatusCode).json(response.data);
    }
  };
}
