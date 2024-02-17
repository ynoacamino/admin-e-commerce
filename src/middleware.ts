/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-restricted-exports */
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware() {},
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // console.log({ req: req.nextUrl, pass: req.nextUrl.href.includes('read') });
        // if (req.nextUrl.href.includes('read')) return true;
        if (!req.nextUrl.pathname.startsWith('/api') && token === null) {
          return false;
        }
        return true;
      },
    },
  },
);
