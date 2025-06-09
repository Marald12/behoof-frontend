import { gql } from 'graphql-request'

export const createCommentSchema = gql`
    mutation createComment($id: String!, $comment: String!) {
        createComment(body: {comment: $comment, articleId: $id}) {
            id
            comment
        }
    }
`