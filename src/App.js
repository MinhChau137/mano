import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './configs/routes';

/**
 * If you have any wrapper components, wrap the core components
 * here. Example: return <ThemeProvider>{routing}</ThemeProvider>
 */
export default function App() {
  const routing = useRoutes(routes);
  return <>{routing}</>;
}
