import { test, expect } from '@playwright/test';

test.describe('@api DummyJSON testing', () => {
  test('GET products returns valid data', async ({ request }) => {
    const res = await request.get('https://dummyjson.com/products');
    expect(res.ok()).toBeTruthy();
    const body = await res.json();

    expect(body).toHaveProperty('products');
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products.length).toBeGreaterThan(0);
    expect(body.products[0]).toHaveProperty('title');
    expect(body.products[0]).toHaveProperty('price');
  });

  test('POST create new user returns id', async ({ request }) => {
    const res = await request.post('https://dummyjson.com/users/add', {
      data: {
        firstName: 'Kim',
        lastName: 'Biggs',
        age: 30,
        email: 'kim.qa@example.com'
      },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.ok()).toBeTruthy();
    const body = await res.json();

    expect(body).toHaveProperty('id');
    expect(body.firstName).toBe('Kim');
    expect(body.lastName).toBe('Biggs');
  });
});
