import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { PaginationDto } from './dto/getall-test-dto';
import { CreateTestDto } from './dto/create-test-dto';

import { TestService } from './test.service';

@Controller('tests')
export class TestController {
  constructor(private testsService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testsService.create(createTestDto);

    // return `This action adds a new test ${createTestDto.name}`;
  }

  @Get()
  findAll(@Query() query: PaginationDto) {
    return `This action returns all tests (limit: ${query.limit} items) (skip: ${query.skip} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} test`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} test`;
  }
}
