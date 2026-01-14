import { test as base, APIRequestContext } from '@playwright/test';
import { AuthApi } from '../api/clients/auth.api';

type AuthFixtures = {
  apiContext: APIRequestContext;
  token: string;
};

export const test = base.extend<AuthFixtures>({
  token: async ({ apiContext }, use) => {
    const authApi = new AuthApi(apiContext);
    const token = await authApi.getToken();
    await use(token);
  },
});

export { expect } from '@playwright/test';
