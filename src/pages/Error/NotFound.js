import { Helmet } from 'react-helmet';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 | Mano</title>
      </Helmet>
      <div>
        <h1 style={{ textAlign: 'center' }}>Page not Found</h1>
      </div>
    </>
  );
}
