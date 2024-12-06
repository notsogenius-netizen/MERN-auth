const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is undefined`);
  }
  return value;
};

export const NODE_ENV = getEnv("NODE_ENV", "development");
export const PORT = getEnv("PORT", "4004");
export const MONGO_URI = getEnv("MONGO_URI");
export const APP_ORIGIN = getEnv("APP_ORIGIN", "http://localhost:3000");
export const JWT_SECRET = getEnv("JWT_SECRET");
export const RESEND_API_KEY = getEnv("RESEND_API_KEY");
export const EMAIL_SENDER = getEnv("EMAIL_SENDER");
