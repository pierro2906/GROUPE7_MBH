// Middleware RBAC
import { NextFunction, Request, Response } from 'express';

export const rbacMiddleware = (allowedRoles:string[]) => {
  return (req: Request, res: Response, next: NextFunction):NextFunction| Response |void => {
    // Vérifie si l'utilisateur est authentifié et a des rôles définis
    if (!(req as any).user || !(req as any).roles) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Vérifie si l'un des rôles de l'utilisateur est autorisé
    const intersection = allowedRoles.filter((role) =>
      (req as any).roles.includes(role)
    );
    // console.log(intersection);
    if (intersection.length === 0) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Si l'utilisateur a l'un des rôles autorisés, passez à l'étape suivante
    next();
  };
};

