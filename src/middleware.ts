/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-restricted-exports */
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware() {},
  {
    callbacks: {
      authorized: ({ token }) => {
        if (token === null) {
          return false;
        }
        return true;
      },
    },
  },
);
