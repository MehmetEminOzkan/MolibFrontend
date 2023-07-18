import { useEffect, useState } from "react";
import { services } from "../../../services";
import { Col, Container, Row } from "react-bootstrap";
import { CustomPagination, Loading, SectionHeader, BookCard } from "../..";

const Books = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [paging, setPaging] = useState({});

    const loadData = async (page) => {
        try {
            const booksData = await services.book.getBooksByPage(page);
            console.log(booksData);
            const {
                content,
                totalPages,
                pageable: { pageNumber },
            } = booksData;

            setBooks(content);
            setPaging({ totalPages, pageNumber });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData(0);
    }, []);

    console.log(books)

    return (
        <Container className="books">
            <SectionHeader
                title1="Book"
                title2="Models"
                desc="Explore our diverse range of high-quality books. Whether you're seeking a fuel-efficient compact for city trips, a robust SUV for outdoor adventures, or a luxury sedan for utmost comfort, our comprehensive fleet is sure to cater to your specific needs."
            />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Row className="gy-4">
                        {books &&
                            books.length > 0 &&
                            books.map((book) => (
                                <Col sm={6} lg={4} key={book.id}>
                                    <BookCard {...book} />
                                </Col>
                            ))}
                    </Row>
                    {paging?.totalPages > 1 && (
                        <Row className="mt-5">
                            <CustomPagination 
                                loadData={loadData}
                                paging={paging}
                            />
                        </Row>
                    )}
                </>
            )}
        </Container>
    );
};

export default Books;