export type TAppConfig = {
  logo: string;
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  enableMock: boolean;
};

const appConfig: TAppConfig = {
  logo: "/logo.png",
  apiPrefix: "/api",
  authenticatedEntryPath: "/dashboard",
  unAuthenticatedEntryPath: "/login",
  enableMock: true,
};

export default appConfig;
