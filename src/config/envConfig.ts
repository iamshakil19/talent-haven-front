export const getBaseUrl = (): string => {
  return process.env.PUBLIC_API_BASE_URL as string;
  // return "https://talent-haven-server.vercel.app/api/v1" as string;
};
