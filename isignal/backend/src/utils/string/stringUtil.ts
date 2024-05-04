import * as crypto from "crypto";

export const generateRandomString = (length: number): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomString += chars[randomIndex];
  }

  return randomString;
};

export const genererMatricule = (nom: string): string => {
  // Convertir le nom en minuscules pour standardiser
  const nomEnMinuscules = nom.toLowerCase();

  // Utiliser la fonction de hachage MD5 pour obtenir un hash
  const hash = crypto.createHash("md5").update(nomEnMinuscules).digest("hex");

  // Concaténer le hash avec les 3 premières lettres du nom pour créer un matricule unique
  const matricule = `${nomEnMinuscules.substring(0, 3)}-${hash.substring(
    0,
    8
  )}`;

  return matricule.toUpperCase();
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const validateMoovPhoneNumber = (numero: string): boolean => {
  // Valide un numéro de téléphone Moov.
  // Le numéro doit commencer par "+228" suivi de 8 chiffres.
  const pattern: RegExp = /^\228\d{8}$/;
  // const pattern: RegExp = /^\+228\d{8}$/;
  return pattern.test(numero);
};

export const validateTogocomPhoneNumber = (numero: string): boolean => {
  // Valide un numéro de téléphone Togocel.
  // Le numéro doit commencer par "+228" suivi de 2 chiffres, puis de 6 chiffres.
  const pattern: RegExp = /^\228\d{2}\d{6}$/;
  // const pattern: RegExp = /^\+228\d{2}\d{6}$/;
  return pattern.test(numero);
};
