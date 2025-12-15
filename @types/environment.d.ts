/* eslint-disable unused-imports/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    EMAIL: string;
    SHEET_ID: string;
    KEY: string;
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
    NEXT_PUBLIC_ORIGIN: string;
    NEXT_PUBLIC_ASSET_VERSION: string;
  }
}
