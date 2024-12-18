/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { Type } from "class-transformer";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";

@InputType()
class PostCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  body?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutPostsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutPostsInput;

  @ApiProperty({
    required: false,
    type: () => LikeCreateNestedManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutPostsInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutPostsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { PostCreateInput as PostCreateInput };
