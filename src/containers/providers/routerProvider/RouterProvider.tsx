import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import Layout from "@/Layout";
import { ROUTES } from "@/enums";
import { AuthGuard, Loader } from "@/components";

const BlogPage = lazy(() => import("@/pages/BlogPage/BlogPage"));
const PostDetailsPage = lazy(
  () => import("@/pages/PostDetailsPage/PostDetailsPage")
);
const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const FeaturePage = lazy(() => import("@/pages/FeaturePage/FeaturePage"));
const TestimonialsPage = lazy(
  () => import("@/pages/TestimonialsPage/TestimonialsPage")
);
const SignInPage = lazy(() => import("@/pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage/SignUpPage"));

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
