import { InputType, Field } from 'type-graphql'

@InputType()
export class UpdateBookInput {
  @Field()
  title: string

  @Field()
  author: string

  @Field()
  isPublished: boolean
}
