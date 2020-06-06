import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'
import { IsString } from 'class-validator'

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  @IsString()
  id: string

  @Field(() => String)
  @Column()
  @IsString()
  title: string

  @Field(() => String)
  @Column()
  @IsString()
  author: string

  @Field(() => Boolean)
  @Column({ default: false })
  @IsString()
  isPublished: boolean
}
