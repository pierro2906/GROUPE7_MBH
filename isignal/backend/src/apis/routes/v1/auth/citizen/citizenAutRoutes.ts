import AuthorityAuthController from "@apis/controllers/auth/AuthorityAuthController";
import CitizenAuthController from "@apis/controllers/auth/CitizenAuthController";
import verifyJWT from "@middlewares/auth/verifyJWT";
import express from "express";

const citizenAuthRouter = express.Router();
// TODO: - add docs

/**
 * @swagger
 * /api/v1/auth/citizen/login:
 *   post:
 *     tags: [Citizen Auth]
 *     summary: Enregistrement d'un nouveau citoyen.
 *     description: Permet à un citoyen de s'enregistrer avec ses informations de base.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contact:
 *                 type: string
 *     responses:
 *       200:
 *         description: Succès de l'enregistrement du citoyen.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success
 *                 content:
 *                   type: object
 *                   properties:
 *                     otpCode:
 *                       type: string
 *                       example: "43555"
 *                     otpHashCode:
 *                       type: string
 *                       example: "0af78df1193043e16d39eebfafcc7cb906094e41e9540ad31bc911955818177e"
 *       400:
 *         description: Erreur lors de l'enregistrement du citoyen.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Acesso não autorizado
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: message error
 */
citizenAuthRouter.post("/login", CitizenAuthController.handleCitizenLogin);

/**
 * @swagger
 * /api/v1/auth/citizen/register:
 *   post:
 *     tags: [Citizen Auth]
 *     summary: Enregistrement d'un nouveau citoyen.
 *     description: Permet à un citoyen de s'enregistrer avec ses informations de base.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *               passwordConfirmation:
 *                 type: string
 *               email:
 *                 type: string
 *                 nullable: true
 *               contact:
 *                 type: string
 *     responses:
 *       200:
 *         description: Succès de l'enregistrement du citoyen.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success
 *                 content:
 *                   type: object
 *                   properties:
 *                     otpCode:
 *                       type: string
 *                       example: "43555"
 *                     otpHashCode:
 *                       type: string
 *                       example: "0af78df1193043e16d39eebfafcc7cb906094e41e9540ad31bc911955818177e"
 *       400:
 *         description: Erreur lors de l'enregistrement du citoyen.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Acesso não autorizado
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: message error
 */

citizenAuthRouter.post(
  "/register",
  CitizenAuthController.handleCitizenRegister
);

/**
 * @swagger
 * /api/v1/auth/citizen/verify-otp:
 *   post:
 *     tags: [Citizen Auth]
 *     summary: Vérifier le code OTP pour l'authentification d'un citoyen.
 *     description: Permet de vérifier le code OTP fourni par un citoyen pour l'authentification.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hash:
 *                 type: string
 *               phone:
 *                 type: string
 *               otp_code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Succès de la vérification du code OTP.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Success
 *                 content:
 *                   type: object
 *                   properties:
 *                     citizenId:
 *                       type: string
 *                       example: c3157b81-3876-45a1-9d30-afd3d3c1a156
 *                     name:
 *                       type: string
 *                       example: Audrey
 *                     contact:
 *                       type: string
 *                       example: "22890235468"
 *                     email:
 *                       type: string
 *                       nullable: true
 *                     address:
 *                       type: string
 *                       nullable: true
 *                     birthdata:
 *                       type: string
 *                       nullable: true
 *                     citizen:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: c3157b81-3876-45a1-9d30-afd3d3c1a156
 *                         status:
 *                           type: string
 *                           example: ACTIVE
 *                         occupation:
 *                           type: string
 *                           nullable: true
 *                         userId:
 *                           type: string
 *                           example: be068e3f-ee55-40e9-b6b2-c8e491453e59
 *                         otp_code:
 *                           type: string
 *                           example: "43555"
 *                         otp_expiration_date:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-05-08T00:14:40.054Z"
 *                         otp_hash_code:
 *                           type: string
 *                           example: "0af78df1193043e16d39eebfafcc7cb906094e41e9540ad31bc911955818177e"
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-05-03T00:14:40.058Z"
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-05-03T00:14:40.058Z"
 *                     accessToken:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaXRpemVuSWQiOiJjMzE1N2I4MS0zODc2LTQ1YTEtOWQzMC1hZmQzZDNjMWExNTYiLCJpYXQiOjE3MTQ2OTUzMjksImV4cCI6MTcxNzI4NzMyOX0.D89HbjYwERJuidwFwF8SK4mlKgxNRzdM5IMvuF5ZmOw"
 *       400:
 *         description: Erreur de vérification du code OTP.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Acesso não autorizado
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: message eror
 */

citizenAuthRouter.post(
  "/verify-otp",

  CitizenAuthController.verifyOtp
);

export default citizenAuthRouter;
