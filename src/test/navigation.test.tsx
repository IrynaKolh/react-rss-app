import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Navigation from '../components/Navigation';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation', () => {
  it('renders navigation links', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
    });
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('sets active class on home link by default', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
    });
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveClass('active-link');
  });

  it('navigates to about page when clicking on About link', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
    });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    act(() => {
      userEvent.click(aboutLink);
    });
    expect(window.location.pathname).toBe('/about');
  });
});
