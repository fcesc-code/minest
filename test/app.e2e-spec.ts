import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('StuffController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/')
  //     .expect(200)
  //     .expect('Hello World!');
  // });

  describe('[STUFF MODULE] > CRUD', function () {
    it('create > POST responds with text and 201', () => {
      return request(app.getHttpServer())
        .post('/stuff/add')
        .send({
          content: { name: 'John', description: 'Doe', category: 'stuff' },
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /text\/html/)
        .expect(201);
    });
  });
});
