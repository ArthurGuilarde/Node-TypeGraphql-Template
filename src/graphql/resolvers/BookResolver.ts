import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Book } from '../../database/models/Book'
import { CreateBookInput } from '../inputs/CreateBookInput'
import { UpdateBookInput } from '../inputs/UpdateBookInput'

@Resolver(Book)
export class BookResolver {
  @Query((returns) => [Book])
  async books() {
    return await Book.find()
  }

  @Mutation((returns) => Book)
  async createBook(@Arg('data') data: CreateBookInput) {
    const book = Book.create(data)
    console.log(book)
    await book.save()
    return book
  }

  @Mutation((returns) => Book)
  async updateBook(@Arg('id') id: string, @Arg('data') data: UpdateBookInput) {
    const book = await Book.findOne({ where: { id } })
    if (!book) {
      throw new Error('Book not found!')
    } else {
      Object.assign(book, data)
      await book.save()
      return book
    }
  }
}
