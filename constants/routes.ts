// import { redirect } from "next/dist/server/api-utils";

const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/question/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;

// redireect("/sign-in-something");
// redireect(ROUTES.SIGN_IN);
