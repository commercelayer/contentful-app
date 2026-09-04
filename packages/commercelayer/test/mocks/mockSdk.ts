import { vi } from 'vitest';

const mockSdk: any = {
  app: {
    onConfigure: vi.fn(),
    getParameters: vi.fn().mockReturnValueOnce({}),
    setReady: vi.fn(),
    getCurrentState: vi.fn(),
  },
  notifier: {
    error: vi.fn(),
    success: vi.fn(),
  },
  parameters: {
    installation: {
      endpoint: 'https://test.commercelayer.io',
    },
    invocation: {
      accessToken: 'test-access-token',
      resource: 'skus',
    },
  },
};

export { mockSdk };
