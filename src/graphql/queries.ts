import { gql } from "@apollo/client";

export const GET_ALL_PEOPLE = gql`
  query GetAllPeople {
    allPeople {
      people {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
      }
    }
  } 
`;

export const GET_PERSON = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      homeworld {
        id
        name
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;

export const GET_ALL_FILMS = gql`
  query GetAllFilms {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        episodeID
      }
    }
  }
`;

export const GET_FILM = gql`
  query GetFilm($id: ID!) {
    film(id: $id) {
      id
      title
      director
      releaseDate
      episodeID
      openingCrawl
      producers
      created
      edited
    }
  }
`;
