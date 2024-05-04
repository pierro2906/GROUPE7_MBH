import config from "@config/app";
import bcrypt from "bcrypt";

// Fonction pour vérifier un mot de passe avec bcrypt
export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    // Comparer le mot de passe avec le hash
    const match = await bcrypt.compare(password, hashedPassword);

    return match;
  } catch (error) {
    // Gérer les erreurs
    throw new Error(
      `Erreur lors de la comparaison du mot de passe : ${
        (error as any).message
      }`
    );
  }
};

// Fonction pour hasher un mot de passe avec bcrypt
export const hashPassword = async (password: string): Promise<string> => {
  try {
    // Générer le sel
    const salt = await bcrypt.genSalt(config.bcrypt.saltRounds);

    // Hasher le mot de passe avec le sel
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    // Gérer les erreurs
    throw new Error(
      `Erreur lors du hachage du mot de passe : ${(error as any).message}`
    );
  }
};
