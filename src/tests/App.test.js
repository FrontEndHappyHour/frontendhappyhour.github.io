import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import episodes from '../episodes.json'; // Assuming you have the episodes JSON file

test('renders the homepage and navigates to episode detail page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if the homepage renders episodes
  const episodeTitle = episodes[0].title;
  expect(screen.getByText(episodeTitle)).toBeInTheDocument();

  // Click on the episode title to navigate to the detail page
  fireEvent.click(screen.getByText(episodeTitle));

  // Check if the episode detail page renders
  expect(screen.getByText(episodeTitle)).toBeInTheDocument();
  expect(screen.getByText(episodes[0].description)).toBeInTheDocument();
});
