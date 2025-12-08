import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    content: 'Sample Content',
  }),
}));

describe('Core Functionality Component', () => {
  test('renders loading state when data is being fetched', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays content after successful fetch', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/sample content/i)).toBeInTheDocument();
    });
  });

  test('handles error when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);
    const errorMessage = await screen.findByRole('alert');
    expect(errorMessage).toHaveTextContent(/failed to fetch/i);
  });

  test('user can interact with content', async () => {
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByRole('button', { name: /interact/i }));
    const interactionResult = await screen.findByText(/interaction successful/i);
    expect(interactionResult).toBeInTheDocument();
  });

  test('component is accessible', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /interact/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty content', async () => {
    (fetchData as jest.Mock).mockResolvedValue({});

    render(<CoreFunctionalityComponent />);
    const noContentMessage = await screen.findByText(/no content available/i);
    expect(noContentMessage).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    content: 'Sample Content',
  }),
}));

describe('Core Functionality Component', () => {
  test('renders loading state when data is being fetched', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays content after successful fetch', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/sample content/i)).toBeInTheDocument();
    });
  });

  test('handles error when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);
    const errorMessage = await screen.findByRole('alert');
    expect(errorMessage).toHaveTextContent(/failed to fetch/i);
  });

  test('user can interact with content', async () => {
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByRole('button', { name: /interact/i }));
    const interactionResult = await screen.findByText(/interaction successful/i);
    expect(interactionResult).toBeInTheDocument();
  });

  test('component is accessible', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /interact/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty content', async () => {
    (fetchData as jest.Mock).mockResolvedValue({});

    render(<CoreFunctionalityComponent />);
    const noContentMessage = await screen.findByText(/no content available/i);
    expect(noContentMessage).toBeInTheDocument();
  });
});