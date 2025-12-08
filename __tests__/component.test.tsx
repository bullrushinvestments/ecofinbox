import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce([null, true]);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/loading.../i));
  });

  test('handles error state gracefully', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockRejectedValue(new Error(errorMessage));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/error: failed to fetch data/i));
  });

  test('allows user interaction with product cards', () => {
    const mockProduct = { id: '123', name: 'Sample Product' };
    (useExternalData as jest.Mock).mockReturnValueOnce([[{ ...mockProduct }], false]);
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/sample product/i));
    expect(window.location.href).toBe(`/product/${mockProduct.id}`);
  });

  test('ensures accessibility features are implemented', () => {
    const mockProduct = { id: '123', name: 'Sample Product' };
    (useExternalData as jest.Mock).mockReturnValueOnce([[{ ...mockProduct }], false]);
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/sample product/i)).toHaveAttribute('aria-label', `view sample product`);
  });

  test('validates edge cases for empty data response', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce([[], false]);
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/no products available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce([null, true]);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/loading.../i));
  });

  test('handles error state gracefully', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockRejectedValue(new Error(errorMessage));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/error: failed to fetch data/i));
  });

  test('allows user interaction with product cards', () => {
    const mockProduct = { id: '123', name: 'Sample Product' };
    (useExternalData as jest.Mock).mockReturnValueOnce([[{ ...mockProduct }], false]);
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/sample product/i));
    expect(window.location.href).toBe(`/product/${mockProduct.id}`);
  });

  test('ensures accessibility features are implemented', () => {
    const mockProduct = { id: '123', name: 'Sample Product' };
    (useExternalData as jest.Mock).mockReturnValueOnce([[{ ...mockProduct }], false]);
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/sample product/i)).toHaveAttribute('aria-label', `view sample product`);
  });

  test('validates edge cases for empty data response', () => {
    (useExternalData as jest.Mock).mockReturnValueOnce([[], false]);
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/no products available/i)).toBeInTheDocument();
  });
});