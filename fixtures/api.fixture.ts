import { test as base, request, APIRequestContext, expect } from '@playwright/test';

type ApiFixtures = {
  apiContext: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
  apiContext: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: 'https://restful-booker.herokuapp.com',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });

    await use(apiContext);
    await apiContext.dispose();
  },
});

export { expect };
