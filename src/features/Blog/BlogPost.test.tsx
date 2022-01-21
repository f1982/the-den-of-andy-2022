import {
  render, screen,
} from '@testing-library/react';
import mockNextUseRouter from '../../../__mocks__/mockUseRouter';
import BlogPost from './BlogPost';

mockNextUseRouter({
  route: '/pricing',
  basePath: '/',
  pathname: '/pricing',
  query: '',
  asPath: `/pricing?error=${encodeURIComponent('Uh oh - something went wrong')}`,
});

const MockedContent = {
  title: 'hello',
  content: 'Oeuvre intérêt garde tombe fermer titre. Cheval marche etc. Endormir écouter branche grand.',
  coverImage: '',
  author: {
    name: 'andy cao',
    picture: '',
  },
  date: '2020-03-16T05:35:07.322Z',
};

test('should show blog content', async () => {
  const { debug } = render(<BlogPost
    title={MockedContent.title}
    content={MockedContent.content}
    coverImage=""
    author={MockedContent.author}
    slug=""
    date={MockedContent.date}
  />);

  expect(screen.getByText(MockedContent.title)).toBeDefined();
  expect(screen.getByText(MockedContent.content)).toBeDefined();
  expect(screen.getByText(MockedContent.author.name)).toBeTruthy();
});
