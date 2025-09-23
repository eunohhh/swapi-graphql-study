import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  documents: ["src/**/*.{ts,tsx,graphql}"],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
      config: {
        useTypeImports: true,
      }
    }
  },
  hooks: {
    afterAllFileWrite: ['biome format --write src/gql/']
  }
}

export default config;