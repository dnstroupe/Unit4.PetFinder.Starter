const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
    test('GET /api/v1/pets - Should return all pets', async () => {
        const response = await request(app).get('/api/v1/pets');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    // Add more tests as needed
});

