import { gql } from "@apollo/client";

export const LIKE_ANONIMUS_PHOTO = gql`
  mutation LikeMutation($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
