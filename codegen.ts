import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  documents: ["src/**/*.{ts,tsx,graphql}"],
  generates: {
    "src/generated/graphql.ts": {
			plugins: ["typescript", "typescript-operations", "typed-document-node"],
			config: {
				fetcher: "graphql-request",
				exposeDocument: true,
				exposeQueryKeys: true,
				exposeMutationKeys: true,
			},
		},
  },
}

export default config;