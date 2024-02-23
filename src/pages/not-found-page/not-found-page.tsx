import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section>
    <h1>404. Page not found</h1>
    <Link to="/">Go to main page</Link>
  </section>
);

export default NotFoundPage;
