export type CreateRefreshTokenType = {
  authorityId: string;
  refreshToken: string;
  family: string;
  browserInfo?: string;
  expiresAt: Date;
};
