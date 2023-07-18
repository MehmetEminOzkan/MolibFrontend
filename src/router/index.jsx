import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    AboutPage,
    AdminContactMessageDetailsPage,
    AdminContactMessagesPage,
    AdminDashboard,
    AdminNewBookPage,
    AdminReservationDetailsPage,
    AdminReservationsPage,
    AdminUserDetailsPage,
    AdminUsersPage,
    AdminBookDetailsPage,
    AdminBookPage,
    ContactPage,
    ErrorPage,
    HomePage,
    LoginPage,
    PrivacyPolicyPage,
    RegisterPage,
    UserProfilePage,
    UserReservationDetailsPage,
    UserReservationsPage,
    BookDetailsPage,
    BooksPage,
} from "../pages";
import { AdminLayout, AuthLayout, CommonLayout, UserLayout } from "../layouts";

const router = createBrowserRouter([
    // COMMON ROUTES
    {
        path: "/",
        element: <CommonLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicyPage />,
            },
            {
                path: "books",
                children: [
                    {
                        index: true,
                        element: <BooksPage />,
                    },
                    {
                        path: ":bookId",
                        element: <BookDetailsPage />,
                    },
                ],
            },
            // USER ROUTES
            {
                path: "user",
                element: <UserLayout />,
                children: [
                    {
                        index: true,
                        element: <UserProfilePage />,
                    },
                    {
                        path: "reservations",
                        children: [
                            {
                                index: true,
                                element: <UserReservationsPage />,
                            },
                            {
                                path: ":reservationId",
                                element: <UserReservationDetailsPage />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    // AUTH ROUTES
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ],
    },
    // ADMIN ROUTES
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminDashboard />,
            },
            {
                path: "contact-messages",
                children: [
                    {
                        index: true,
                        element: <AdminContactMessagesPage />,
                    },
                    {
                        path: ":contactMessageId",
                        element: <AdminContactMessageDetailsPage />,
                    },
                ],
            },
            {
                path: "reservations",
                children: [
                    {
                        index: true,
                        element: <AdminReservationsPage />,
                    },
                    {
                        path: ":reservationId",
                        element: <AdminReservationDetailsPage />,
                    },
                ],
            },
            {
                path: "users",
                children: [
                    {
                        index: true,
                        element: <AdminUsersPage />,
                    },
                    {
                        path: ":userId",
                        element: <AdminUserDetailsPage />,
                    },
                ],
            },
            {
                path: "books",
                children: [
                    {
                        index: true,
                        element: <AdminBookPage />,
                    },
                    {
                        path: "new",
                        element: <AdminNewBookPage />,
                    },
                    {
                        path: ":bookId",
                        element: <AdminBookDetailsPage />,
                    },
                ],
            },
        ],
    },
    // ERROR ROUTES
    {
        path: "/forbidden",
        element: <ErrorPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
