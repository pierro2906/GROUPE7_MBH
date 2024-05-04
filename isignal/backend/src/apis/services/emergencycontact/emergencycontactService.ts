// import { EmergencyContactCreateDataType } from "@apis/schemas/emergencycontact/emergencycontactTypes";

// export default class EmergencycontactService {
//   // write your static methods here

//   // Définissez votre service
//   createEmergencyContact = async (
//     data: EmergencyContactCreateDataType,
//     file: Express.Multer.File
//   ): Promise<any> => {
//     try {
//       // Récupérer les données du fichier
//       const pictureData = fs.readFileSync(file.path);

//       // Créer l'enregistrement de l'urgence
//       const emergencyContact = await prisma.emergencyContact.create({
//         data: {
//           citizenId: data.citizenId,
//           name: data.name,
//           contact: data.contact,
//           picture: pictureData, // Enregistrez les données du fichier dans la base de données
//         },
//       });

//       // Supprimer le fichier après l'avoir enregistré dans la base de données
//       fs.unlinkSync(file.path);

//       return emergencyContact;
//     } catch (error) {
//       // Gérer les erreurs
//       throw new Error(
//         `Erreur lors de la création du contact d'urgence : ${error.message}`
//       );
//     }
//   };
// }
