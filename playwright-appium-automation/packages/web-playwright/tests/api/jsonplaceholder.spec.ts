import { test, expect } from '@playwright/test';

test.describe('@api JSONPlaceholder', () => {
  test('GET /posts returns a list', async ({ request }) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('title');
  });

  test('POST /posts returns 201 with id', async ({ request }) => {
    const res = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: { title: 'API test', body: 'Automation FTW', userId: 1 },
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('API test');
   });
  });
