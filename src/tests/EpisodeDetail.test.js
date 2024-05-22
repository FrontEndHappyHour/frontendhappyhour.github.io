import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import EpisodeDetail from '../components/EpisodeDetail';

jest.mock('../transcripts/1.js', () => () => '<p>Test transcript content</p>', { virtual: true });

const episode = {
  title: 'Test Episode',
  description: 'This is a test description.',
  published: '2023-01-01',
  episode: 1,
  id: '123456789',
  vid: 'abcdefghijk',
  panel: ['Ryan Burgess', 'Cole Turner'],
  guests: [
    { name: 'Rita Kozlov', twitter: 'ritakozlov_' }
  ],
  links: [
    { title: 'Test Link', url: 'https://example.com' }
  ],
  picks: [
    { title: 'Test Pick', url: 'https://example.com', from: 'Rita Kozlov' }
  ]
};

test('renders episode details correctly', () => {
  const { getByText, getByRole } = render(
    <BrowserRouter>
      <EpisodeDetail episode={episode} />
    </BrowserRouter>
  );

  // Check if the episode title is rendered
  expect(getByText('Test Episode')).toBeInTheDocument();

  // Check if the episode description is rendered
  expect(getByText('This is a test description.')).toBeInTheDocument();

  // Check if the published date is rendered
  expect(getByText('Published on: 2023-01-01')).toBeInTheDocument();

  // Check if the panel members are rendered
  expect(getByText('Ryan Burgess')).toBeInTheDocument();
  expect(getByText('Cole Turner')).toBeInTheDocument();

  // Check if the guest is rendered with Twitter link
  expect(getByText('Rita Kozlov')).toBeInTheDocument();
  expect(getByText('@ritakozlov_')).toBeInTheDocument();

  // Check if the pick is rendered with link
  expect(getByText('Test Pick')).toBeInTheDocument();
  expect(getByText('Test Pick').closest('a')).toHaveAttribute('href', 'https://example.com');

  // Check if the additional link is rendered
  expect(getByText('Test Link')).toBeInTheDocument();
  expect(getByText('Test Link').closest('a')).toHaveAttribute('href', 'https://example.com');

  // Check if the YouTube embed is rendered
  const youtubeIframe = getByRole('iframe', { name: /YouTube video player/i });
  expect(youtubeIframe).toHaveAttribute('src', 'https://www.youtube.com/embed/abcdefghijk');

  // Check if the SoundCloud embed is rendered
  const soundcloudIframe = getByRole('iframe', { name: '' });
  expect(soundcloudIframe).toHaveAttribute('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false');

  // Check if the transcript is rendered
  expect(getByText('Test transcript content')).toBeInTheDocument();
});
