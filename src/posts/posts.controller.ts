import { Body, Controller, Get, Post } from '@nestjs/common'
import { PostsService } from './posts.service'

@Controller('posts')
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { PostsService } from './posts.service'ts

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  
  @Get()
  getData() {
    return this.postService.get()
  }
  
  @Post()
  postData(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.postService.store(title, description)
  }
  
  // :idと表記することで、urlのidを取得できる
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.postService.update(id, title, description)
  }
}
