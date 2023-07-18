import { deleteMessage, getMessage, getMessagesByPage, sendMessage } from "./contact/contact-service";

import { createReservation, deleteReservation, downloadReservationReports, getReservationById, getReservationByIdAdmin, getReservationsByPage, getReservationsByPageAdmin, isBookAvailable, updateReservation } from "./reservation/reservation-service";

import { deleteUser, downloadUserReports, getUser, getUserAdmin, getUsersByPage, login, register, updatePassword, updateUser, updateUserAdmin } from "./user/user-service";

import { addBook, deleteBook, deleteBookImage, downloadBookReports, getBookById, getBooks, getBooksByPage, updateBook, uploadBookImage } from "./book/book-service";

export const services = {
    contact: {
        // COMMON ENDPOINTS
        sendMessage,
        // ADMIN ENDPOINTS
        deleteMessage,
        getMessage,
        getMessagesByPage,
    },
    reservation: {
        // COMMON ENDPOINTS
        createReservation,
        getReservationById,
        getReservationsByPage,
        isBookAvailable,
        // ADMIN ENDPOINTS
        deleteReservation,
        downloadReservationReports,
        getReservationByIdAdmin,
        getReservationsByPageAdmin,
        updateReservation,
    },
    user: {
        // COMMON ENDPOINTS
        login,
        register,
        // USER ENDPOINTS
        getUser,
        updateUser,
        updatePassword,
        // ADMIN ENDPOINTS
        deleteUser,
        downloadUserReports,
        getUserAdmin,
        getUsersByPage,
        updateUserAdmin,
    },
    book: {
        // COMMON ENDPOINTS
        getBookById,
        getBooks,
        getBooksByPage,
        // ADMIN ENDPOINTS
        addBook,
        deleteBook,
        deleteBookImage,
        downloadBookReports,
        updateBook,
        uploadBookImage,
    }
}