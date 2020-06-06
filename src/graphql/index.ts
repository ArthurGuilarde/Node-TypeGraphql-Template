import { buildSchema } from 'type-graphql'
import { BookResolver } from './resolvers/BookResolver'

export default async function creteSchema() {
  return await buildSchema({
    resolvers: [BookResolver]
  })
}
