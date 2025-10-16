import { test, expect, request } from '@playwright/test';

test.describe('API - reqres.in examples', () => {
  test('GET users', async ({ request }) => {
    const res = await request.get('https://reqres.in/api/users?page=2');
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.page).toBe(2);
    expect(Array.isArray(body.data)).toBeTruthy();
  });

  test('POST create user', async ({ request }) => {
    const res = await request.post('https://reqres.in/api/users', {
      data: { name: 'morpheus', job: 'leader' },
    });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body).toHaveProperty('id');
  });
});