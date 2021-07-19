/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly TEST_BUILD: boolean;
    readonly PUBLIC_URL: string;
    readonly GRAPHQL_URL: string;
  }
}