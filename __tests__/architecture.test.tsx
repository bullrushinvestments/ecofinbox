import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock data and dependencies
jest.mock('./someExternalDependency', () => ({
  fetchData: jest.fn().mockResolvedValue({
    designData: {
      sections: [
        { id: '1', title: 'Section 1' },
        { id: '2', title: 'Section 2' }
      ]
    }
  })
}));

describe('DesignArchitectureComponent Tests', () => {
  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays design data after loading', async () => {
    const { rerender } = render(<DesignArchitectureComponent />);

    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText(/section 1/i)).toBeInTheDocument();
    expect(screen.getByText(/section 2/i)).toBeInTheDocument();
  });

  test('handles error state', async () => {
    jest.mock('./someExternalDependency', () => ({
      fetchData: jest.fn().mockRejectedValue(new Error('Failed to fetch data'))
    }));

    render(<DesignArchitectureComponent />);
    
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  test('handles edge case with no sections', async () => {
    jest.mock('./someExternalDependency', () => ({
      fetchData: jest.fn().mockResolvedValue({ designData: { sections: [] } })
    }));

    render(<DesignArchitectureComponent />);
    
    await waitFor(() => expect(screen.getByText(/no sections available/i)).toBeInTheDocument());
  });

  test('is accessible with proper ARIA roles and labels', async () => {
    render(<DesignArchitectureComponent />);

    await waitFor(() => expect(screen.getAllByRole('heading')).toHaveLength(2));
    screen.getAllByRole('heading').forEach((element, index) => {
      expect(element).toHaveAccessibleName(`Section ${index + 1}`);
    });
  });

  test('allows user interaction with sections', async () => {
    render(<DesignArchitectureComponent />);

    await waitFor(() => fireEvent.click(screen.getByText(/section 1/i)));
    
    // Assuming there is some action or state change after clicking a section
    expect(window.location.pathname).toBe('/some-section-path'); // Example assertion, replace as needed
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock data and dependencies
jest.mock('./someExternalDependency', () => ({
  fetchData: jest.fn().mockResolvedValue({
    designData: {
      sections: [
        { id: '1', title: 'Section 1' },
        { id: '2', title: 'Section 2' }
      ]
    }
  })
}));

describe('DesignArchitectureComponent Tests', () => {
  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays design data after loading', async () => {
    const { rerender } = render(<DesignArchitectureComponent />);

    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText(/section 1/i)).toBeInTheDocument();
    expect(screen.getByText(/section 2/i)).toBeInTheDocument();
  });

  test('handles error state', async () => {
    jest.mock('./someExternalDependency', () => ({
      fetchData: jest.fn().mockRejectedValue(new Error('Failed to fetch data'))
    }));

    render(<DesignArchitectureComponent />);
    
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  test('handles edge case with no sections', async () => {
    jest.mock('./someExternalDependency', () => ({
      fetchData: jest.fn().mockResolvedValue({ designData: { sections: [] } })
    }));

    render(<DesignArchitectureComponent />);
    
    await waitFor(() => expect(screen.getByText(/no sections available/i)).toBeInTheDocument());
  });

  test('is accessible with proper ARIA roles and labels', async () => {
    render(<DesignArchitectureComponent />);

    await waitFor(() => expect(screen.getAllByRole('heading')).toHaveLength(2));
    screen.getAllByRole('heading').forEach((element, index) => {
      expect(element).toHaveAccessibleName(`Section ${index + 1}`);
    });
  });

  test('allows user interaction with sections', async () => {
    render(<DesignArchitectureComponent />);

    await waitFor(() => fireEvent.click(screen.getByText(/section 1/i)));
    
    // Assuming there is some action or state change after clicking a section
    expect(window.location.pathname).toBe('/some-section-path'); // Example assertion, replace as needed
  });
});