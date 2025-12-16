import Stories from '../components/portfolio/ShortStories.astro';
import Books from '../components/portfolio/Books.astro';
import Articles from '../components/portfolio/Articles.astro';
import Editing from '../components/portfolio/Editing.astro';
import Games from '../components/portfolio/Games.astro';

const categories = [
  {
    name: 'Short Stories',
    id: 'stories',
    image: '/assets/portfolio/stories/cover.jpg',
    component: Stories,
  },
  {
    name: 'Books',
    id: 'books',
    image: '/assets/portfolio/books/cover.jpg',
    component: Books,
  },
  {
    name: 'Articles',
    id: 'articles',
    image: '/assets/portfolio/articles/cover.jpg',
    component: Articles,
  },
  {
    name: 'Editing',
    id: 'editing',
    image: '/assets/portfolio/editing/cover.jpg',
    component: Editing,
  },
  {
    name: 'Games',
    id: 'games',
    image: '/assets/portfolio/games/cover.jpg',
    component: Games,
  },
];
export default categories;
