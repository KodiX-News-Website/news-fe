import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import Layout from "@/Layout";
import { ROUTES } from "@/enums";
import { Loader } from "@/components";
import BlogPage from "@/pages/BlogPage/BlogPage";
import PostDetailsPage from "@/pages/PostDetailsPage/PostDetailsPage";
import HomePage from "@/pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <Suspense fallback={<Loader />}>Custom Error Page</Suspense>,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.BLOG,
        element: (
          <Suspense fallback={<Loader />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.POST_DETAILS,
        element: (
          <Suspense fallback={<Loader />}>
            <PostDetailsPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <Suspense fallback={<Loader />}>404 Not Found</Suspense>,
      },
    ],
  },
]);

export default function RouterProvider() {
  return <Provider router={router} />;
}
