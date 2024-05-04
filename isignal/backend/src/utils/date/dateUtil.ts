export const parseDurationToMilliseconds = (duration: string): number => {
  const matches = RegExp(/^(\d+)([smhd])$/).exec(duration);
  if (!matches) {
    throw new Error("Invalid duration format");
  }
  const amount = parseInt(matches[1]);
  const unit = matches[2];

  switch (unit) {
    case "s":
      return amount * 1000;
    case "m":
      return amount * 60 * 1000;
    case "h":
      return amount * 60 * 60 * 1000;
    case "d":
      return amount * 24 * 60 * 60 * 1000;
    default:
      throw new Error("Invalid duration unit");
  }
};

/** Returns the token expiration date */
export function getDateToInterval(interval: number): Date {
  return new Date(Date.now() + interval);
}
