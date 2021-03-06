import { gql } from "@apollo/client";

export const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const GET_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const GET_CATEGORYS = gql`
  query getCategory {
    categories {
      id
      cover
      name
      path
      emoji
    }
  }
`;

export const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;
