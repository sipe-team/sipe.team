/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    EMAIL: string;
    SHEET_ID: string;
    KEY: string;
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
  }
}
