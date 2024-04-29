export type TAppConfig = {
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  enableMock: boolean;
};

const appConfig: TAppConfig = {
  apiPrefix: "/api",
  authenticatedEntryPath: "/dashboard",
  unAuthenticatedEntryPath: "/login",
  enableMock: true,
};

export default appConfig;
