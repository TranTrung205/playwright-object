// Fixture là function chạy trước test để chuẩn bị context hoặc dữ liệu cần thiết cho test
//Fixtures are used to prepare test preconditions and shared contexts, such as authentication or logged-in state,
// so that tests are clean, reusable, and easier to maintain

import { test as base, expect } from '@playwright/test';

type ApiFixtures = {
    token: string;
};

export const test = base.extend<ApiFixtures>({
    token: async ({ request }, use) => {
        const response = await request.post(
            '',
            {
                data: {
                    username: process.env.USERNAME || '',
                    password: process.env.PASSWORD || ''
                }
            }
        );

        expect(response.status()).toBe(200);

        const body = await response.json();
        await use(body.token);
    }
});

export { expect };
