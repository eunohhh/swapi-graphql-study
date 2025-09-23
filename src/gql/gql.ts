/* eslint-disable */
import * as types from "./graphql";
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "query GetAllPeople {\n  allPeople {\n    people {\n      id\n      name\n      birthYear\n      eyeColor\n      gender\n      hairColor\n      height\n      mass\n      skinColor\n    }\n  }\n}\n\nquery GetPerson($id: ID!) {\n  person(id: $id) {\n    id\n    name\n    birthYear\n    eyeColor\n    gender\n    hairColor\n    height\n    mass\n    skinColor\n    homeworld {\n      id\n      name\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n}": typeof types.GetAllPeopleDocument;
  "query GetAllFilms {\n  allFilms {\n    films {\n      id\n      title\n      director\n      releaseDate\n      episodeID\n    }\n  }\n}\n\nquery GetFilm($id: ID!) {\n  film(id: $id) {\n    id\n    title\n    director\n    releaseDate\n    episodeID\n    openingCrawl\n    producers\n    created\n    edited\n  }\n}": typeof types.GetAllFilmsDocument;
};
const documents: Documents = {
  "query GetAllPeople {\n  allPeople {\n    people {\n      id\n      name\n      birthYear\n      eyeColor\n      gender\n      hairColor\n      height\n      mass\n      skinColor\n    }\n  }\n}\n\nquery GetPerson($id: ID!) {\n  person(id: $id) {\n    id\n    name\n    birthYear\n    eyeColor\n    gender\n    hairColor\n    height\n    mass\n    skinColor\n    homeworld {\n      id\n      name\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n}":
    types.GetAllPeopleDocument,
  "query GetAllFilms {\n  allFilms {\n    films {\n      id\n      title\n      director\n      releaseDate\n      episodeID\n    }\n  }\n}\n\nquery GetFilm($id: ID!) {\n  film(id: $id) {\n    id\n    title\n    director\n    releaseDate\n    episodeID\n    openingCrawl\n    producers\n    created\n    edited\n  }\n}":
    types.GetAllFilmsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetAllPeople {\n  allPeople {\n    people {\n      id\n      name\n      birthYear\n      eyeColor\n      gender\n      hairColor\n      height\n      mass\n      skinColor\n    }\n  }\n}\n\nquery GetPerson($id: ID!) {\n  person(id: $id) {\n    id\n    name\n    birthYear\n    eyeColor\n    gender\n    hairColor\n    height\n    mass\n    skinColor\n    homeworld {\n      id\n      name\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n}",
): (typeof documents)["query GetAllPeople {\n  allPeople {\n    people {\n      id\n      name\n      birthYear\n      eyeColor\n      gender\n      hairColor\n      height\n      mass\n      skinColor\n    }\n  }\n}\n\nquery GetPerson($id: ID!) {\n  person(id: $id) {\n    id\n    name\n    birthYear\n    eyeColor\n    gender\n    hairColor\n    height\n    mass\n    skinColor\n    homeworld {\n      id\n      name\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetAllFilms {\n  allFilms {\n    films {\n      id\n      title\n      director\n      releaseDate\n      episodeID\n    }\n  }\n}\n\nquery GetFilm($id: ID!) {\n  film(id: $id) {\n    id\n    title\n    director\n    releaseDate\n    episodeID\n    openingCrawl\n    producers\n    created\n    edited\n  }\n}",
): (typeof documents)["query GetAllFilms {\n  allFilms {\n    films {\n      id\n      title\n      director\n      releaseDate\n      episodeID\n    }\n  }\n}\n\nquery GetFilm($id: ID!) {\n  film(id: $id) {\n    id\n    title\n    director\n    releaseDate\n    episodeID\n    openingCrawl\n    producers\n    created\n    edited\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
