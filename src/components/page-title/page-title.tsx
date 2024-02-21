import { Helmet } from 'react-helmet-async';

interface ITitleProps {
  title: string;
}

const PageTitle = ({ title }: ITitleProps) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default PageTitle;
