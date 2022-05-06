import { gql } from "@apollo/client";


export const LIKE_ANONIMUS_PHOTO = gql`
  mutation LikeMutation($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
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
