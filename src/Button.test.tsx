import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    const mockOnClick = jest.fn();

    it('renders with the correct text', () => {
        render(<Button name="Click Me" onClick={mockOnClick} />);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        render(<Button name="Click Me" onClick={mockOnClick} />);
        fireEvent.click(screen.getByText('Click Me'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when the disabled prop is true', () => {
        render(<Button name="Click Me" onClick={mockOnClick} disabled={true} />);
        expect(screen.getByText('Click Me')).toBeDisabled();
    });

    it('is not disabled when the disabled prop is false', () => {
        render(<Button name="Click Me" onClick={mockOnClick} disabled={false} />);
        expect(screen.getByText('Click Me')).toBeEnabled();
    });

    it('is not disabled by default', () => {
        render(<Button name="Click Me" onClick={mockOnClick} />);
        expect(screen.getByText('Click Me')).toBeEnabled();
    });
});
