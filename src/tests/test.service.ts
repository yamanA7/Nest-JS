import { Injectable } from '@nestjs/common';
import { Test } from './interfaces/test.interface';

@Injectable()
export class TestService {
  private readonly tests: Test[] = [];

  create(test: Test) {
    this.tests.push(test);
    return 'Suceessfully added';
  }

  findAll(): Test[] {
    return this.tests;
  }
}
