import { withAuth } from 'next-auth/middleware'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // console.log(token)

        return !!token
      }
    }
  }
)

export const config = { matcher: ['/', '/new-todo', '/update-todo/:path*'] }
