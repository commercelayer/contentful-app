import React from 'react';
import ConfigScreen from './ConfigScreen';
import { render, waitFor } from '@testing-library/react';
import { mockCma, mockSdk } from '../../test/mocks';

describe('Config Screen component', () => {
  it('Component text exists', async () => {
    const { getByText } = render(<ConfigScreen cma={mockCma} sdk={mockSdk} />);

    // wait for the mount effect (getParameters/setReady) to settle before proceeding
    await waitFor(() => expect(mockSdk.app.setReady).toHaveBeenCalled());

    // simulate the user clicking the install button
    await mockSdk.app.onConfigure.mock.calls[0][0]();

    expect(getByText('About Commerce Layer')).toBeInTheDocument();
  });
});
