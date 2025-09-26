"use client";

import { useQuery, useSuspenseQuery } from "@apollo/client/react";
import {
  GetAllFilmsQuery,
  GetAllPeopleQuery,
  GetAllPeopleWithHomeworldQuery,
  GetAllPlanetsQuery,
  GetFilmQuery,
  GetFilmQueryVariables,
  GetPersonQuery,
  GetPersonQueryVariables,
} from "@/generated/graphql";
import {
  GET_ALL_FILMS,
  GET_ALL_PEOPLE,
  GET_ALL_PEOPLE_WITH_HOMEWORLD,
  GET_ALL_PLANETS,
  GET_FILM,
  GET_PERSON,
} from "../graphql/queries";

export function useGetAllPeople() {
  return useQuery<GetAllPeopleQuery>(GET_ALL_PEOPLE);
}

export function useGetPerson(id: string) {
  return useQuery<GetPersonQuery, GetPersonQueryVariables>(GET_PERSON, {
    variables: { id },
  });
}

export function useGetAllFilms() {
  return useQuery<GetAllFilmsQuery>(GET_ALL_FILMS);
}

export function useGetAllFilmsSuspense() {
  return useSuspenseQuery<GetAllFilmsQuery>(GET_ALL_FILMS);
}

export function useGetFilm(id: string) {
  return useQuery<GetFilmQuery, GetFilmQueryVariables>(GET_FILM, {
    variables: { id },
  });
}

export function useGetAllPeopleWithHomeworld() {
  return useQuery<GetAllPeopleWithHomeworldQuery>(
    GET_ALL_PEOPLE_WITH_HOMEWORLD,
  );
}

export function useGetAllPlanets() {
  return useQuery<GetAllPlanetsQuery>(GET_ALL_PLANETS);
}
