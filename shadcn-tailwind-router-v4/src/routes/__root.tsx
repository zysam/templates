import { createRootRoute,Outlet,HeadContent } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: "React TST A0",
      },
      {
        name: "description",
        content: "React TST A0 Starter Template with TanStack Router v4, Tailwind CSS v4, and Shadcn/UI",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.svg",
      },
    ],
  }),
  component: () => (
    <>
    <HeadContent />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})