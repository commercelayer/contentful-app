import React from 'react';
import Dialog from './Dialog';
import { render } from '@testing-library/react';
import { mockCma, mockSdk } from '../../test/mocks';
import { vi } from 'vitest';

vi.mock('@commercelayer/sdk', () => ({
  default: () => ({
    skus: {
      list: vi.fn().mockResolvedValue(
        Object.assign([], { meta: { recordCount: 0, pageCount: 1 } })
      ),
    },
  }),
}));

describe('Dialog component', () => {
  it('Component text exists', async () => {
    const { findByPlaceholderText } = render(<Dialog cma={mockCma} sdk={mockSdk} />);

    expect(await findByPlaceholderText('Search for an option...')).toBeInTheDocument();
  });
});
