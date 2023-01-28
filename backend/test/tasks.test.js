const request = require('supertest');

const app = require('../src/app');

describe('Endpoint /api/v1/tasks', () => {
    it('should respond with 200 when called with GET request', (done
    ) => {
      request(app)
        .get('/api/v1/tasks')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200,done);
    });


it('should return a list of tasks when called with GET', (done) => {
    const expected = [
      {
        id: 1,
        name: 'Pay bills',
        description:'pay water bill by mobilepay',
        isDone:false,
      },
      {
        id: 2,
        name: 'Meet George',
        description:'Meet at 8pm',
        isDone:false,
      },
      {
        id: 3,
        name: 'Buy eggs',
        description:'Buy from k-market',
        isDone:false,
      },
      
    ];
    request(app)
      .get('/api/v1/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, expected, done);
  });


  it('should return the tasks when called with GET id', (done) => {
    const expected = {
      id: 2,
      name: 'Meet George',
      description:'Meet at 8pm',
      isDone:false,
    };
    request(app)
      .get('/api/v1/tasks/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, expected, done);
  });


it('should return 404 if nothing was found with the id', (done) => {
    request(app)
      .get('/api/v1/tasks/20')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, { message: 'Not found' }, done);
  });


  it('should return 201 when new task was added', async () => {
    await request(app)
      .post('/api/v1/tasks/')
      .set('Accept', 'application/json')
      .send({ id: 4, name: 'Buy milk',description:'Buy from k-market',isDone:false })
      .expect('Content-Type', /json/)
      .expect(201, { message: 'Created' });
    // Check that it was actually added as well
    const expected = {
      id: 4,
      name: 'Buy milk',
      description:'Buy from k-market',
      isDone:false,
    };
    await request(app)
      .get('/api/v1/tasks/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, expected);
  });

  //update

it('should return 200 when task was updated', async () => {
    await request(app)
      .patch('/api/v1/tasks/3')
      .set('Accept', 'application/json')
      .send({ name: 'Buy eggs',description:'Buy from k-market',isDone:false })
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Updated' });
    // Check that it was actually added as well
    const expected = {
      id: 3,
      name: 'Buy eggs',
      description:'Buy from k-market',
      isDone:false,
    };
    await request(app)
      .get('/api/v1/tasks/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, expected);
    }); 

    
it('should return 200 when task was deleted', async () => {
    await request(app)
      .delete('/api/v1/tasks/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Deleted' });
    await request(app)
      .get('/api/v1/tasks/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, { message: 'Not found' });
  });

  });