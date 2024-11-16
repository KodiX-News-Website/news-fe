import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import Layout from "@/Layout";
import { ROUTES } from "@/enums";
import { AuthGuard, Loader } from "@/components";
import BlogPage from "@/pages/BlogPage/BlogPage";
import PostDetailsPage from "@/pages/PostDetailsPage/PostDetailsPage";
import HomePage from "@/pages/HomePage/HomePage";
import FeaturePage from "@/pages/FeaturePage/FeaturePage";
import TestimonialsPage from "@/pages/TestimonialsPage/TestimonialsPage";
import SignInPage from "@/pages/SignInPage/SignInPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";

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
          <AuthGuard>
            <Suspense fallback={<Loader />}>
              <PostDetailsPage />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: ROUTES.FEATURE,
        element: (
          <Suspense fallback={<Loader />}>
            <FeaturePage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.TESTIMONIALS,
        element: (
          <Suspense fallback={<Loader />}>
            <TestimonialsPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <Suspense fallback={<Loader />}>404 Not Found</Suspense>,
      },
    ],
  },
  {
    path: ROUTES.SIGN_IN,
    element: (
      <AuthGuard invert>
        <Suspense fallback={<Loader />}>
          <SignInPage />
        </Suspense>
      </AuthGuard>
    ),
  },
  {
    path: ROUTES.SIGN_UP,
    element: (
      <AuthGuard invert>
        <Suspense fallback={<Loader />}>
          <SignUpPage />
        </Suspense>
      </AuthGuard>
    ),
  },
]);

export default function RouterProvider() {
  return <Provider router={router} />;
}
