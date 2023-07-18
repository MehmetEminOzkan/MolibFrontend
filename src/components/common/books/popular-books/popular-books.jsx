import { Col, Container, Row } from "react-bootstrap";
import { Loading, SectionHeader, Spacer, BookCard } from "../../..";
import { useEffect, useState } from "react";
import { services } from "../../../../services";
import "./popular-books.scss"

const PopularBooks = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    const loadData = async () => {
        try {
            const bookData = await services.book.getBooksByPage();
            const { content } = bookData;
            setBooks(content);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(books)

    return (
        <div className="popular-books">
            <SectionHeader
                title1="Popular"
                title2="Books"
                desc="To contribute to positive change and achieve our sustainability goals with many extraordinary"
            />
            <Spacer />
            <Container>
                <Row className="gy-5">
                    {loading ? (
                        <Loading />
                    ) : (
                        books &&
                        books.map((book, index) => (
                            <Col md={6} lg={4} key={book?.id || index}>
                                <BookCard {...book} />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default PopularBooks;