import { useState } from "react";
import Book from "./Book";

const booksData = [
    {
        "id": 1,
        "name": "JavaScript and jQuery",
        "publisher": "Jon Duckett",
        "author": "George Orwell",
        "published_year": 2019,
        "price": 62,
        "ratings": 4,
        "image": "https://i.ibb.co/Zc0v287/book.png"
    },
    {
        "id": 2,
        "name": "Alchemist",
        "publisher": "HarperCollins",
        "author": "Paulo Coelho",
        "published_year": 1988,
        "price": 12.99,
        "ratings": 5,
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
    },
    {
        "id": 3,
        "name": "Catcher",
        "publisher": "Little, Brown and Company",
        "author": "J.D. Salinger",
        "published_year": 1951,
        "price": 11.99,
        "ratings": 3,
        "image": "https://media.thuprai.com/products/91LvoDqkF1L.jpg"
    },
    {
        "id": 4,
        "name": "Code Complete",
        "publisher": "Microsoft Press",
        "author": "Steve McConnell",
        "published_year": 2004,
        "price": 39.99,
        "ratings": 4,
        "image": "https://m.media-amazon.com/images/I/61GzazUmKyL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 5,
        "name": "Clean Code",
        "publisher": "Prentice Hall",
        "author": "Robert C. Martin",
        "published_year": 2008,
        "price": 34.99,
        "ratings": 5,
        "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51E2055ZGUL._SL1000_.jpg"
    },
    {
        "id": 6,
        "name": "Design Patterns",
        "publisher": "Addison-Wesley",
        "author": "Erich Gamma",
        "published_year": 1994,
        "price": 49.99,
        "ratings": 5,
        "image": "https://balka-book.com/files/2023/08_14/14_20/u_files_store_5_6.jpg"
    },
    {
        "id": 7,
        "name": "Eloquent JS",
        "publisher": "No Starch Press",
        "author": "Marijn Haverbeke",
        "published_year": 2018,
        "price": 29.99,
        "ratings": 4,
        "image": "https://eloquentjavascript.net/img/cover.jpg"
    },
    {
        "id": 8,
        "name": "Head First JS",
        "publisher": "O'Reilly Media",
        "author": "Elisabeth Robson",
        "published_year": 2004,
        "price": 38.99,
        "ratings": 3,
        "image": "https://m.media-amazon.com/images/I/81h4jxKvcmS._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 9,
        "name": "JavaScript Good Parts",
        "publisher": "O'Reilly Media",
        "author": "Douglas Crockford",
        "published_year": 2008,
        "price": 24.99,
        "ratings": 4,
        "image": "https://m.media-amazon.com/images/I/511j6cza5bL.jpg"
    },
    {
        "id": 10,
        "name": "Mithical Month",
        "publisher": "Addison-Wesley",
        "author": "Frederick P. Brooks Jr.",
        "published_year": 1975,
        "price": 32.99,
        "ratings": 4,
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348430512i/13629.jpg"
    },
    {
        "id": 11,
        "name": "Python Crash Course",
        "publisher": "No Starch Press",
        "author": "Eric Matthes",
        "published_year": 2015,
        "price": 25.99,
        "ratings": 5,
        "image": "https://m.media-amazon.com/images/I/81py-nCTfrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 12,
        "name": "Trust Your Journey",
        "publisher": "Addison-Wesley",
        "author": "Dave Thomas, Andy Hunt",
        "published_year": 1999,
        "price": 42.99,
        "ratings": 4,
        "image": "https://m.media-amazon.com/images/I/71DgBLETNqL._AC_UF1000,1000_QL80_.jpg"
    }
];

// status for empty or invalid search value
const noBooksFound =
    <div className="text-center my-20">
        <img className="inline-block w-20" src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="no-data-found" />
        <div className="text-4xl">No books found!</div>
    </div>

const Books = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState([...booksData]);
    const sortedBooks = [...booksData];

    // search books by name
    const handleBookSearch = (query) => {
        if (query !== "") {
            const sortedBooks = booksData.filter(book => book.name.toLowerCase().startsWith(query.toLowerCase()));
            setBooks(sortedBooks);
        } else {
            setBooks([]);
        }
    };

    // sorting books by name, published year in ascending & descending order
    const handleCategoryChange = (e) => {
        if (books.length === 0) {
            return
        }
        const ctg = e.target.value;
        if (ctg === "name_asc") {
            sortedBooks.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setBooks(sortedBooks);
        } else if (ctg === "name_desc") {
            sortedBooks.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
            setBooks(sortedBooks);
        } else if (ctg === "year_asc") {
            sortedBooks.sort((a, b) => a.published_year - b.published_year);
            setBooks(sortedBooks);
        } else if (ctg === "year_desc") {
            sortedBooks.sort((a, b) => b.published_year - a.published_year);
            setBooks(sortedBooks);
        }
    };

    return (
        <main className="my-10 lg:my-14 md:mx-5">
            <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
                    {/* info , title , search */}
                    <div>
                        <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
                        <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                            Trending Books of the Year
                        </h2>
                        {/* Search Box */}
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleBookSearch(searchQuery);
                        }}>
                            <div className="flex">
                                <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                                    <input
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        type="search"
                                        id="search-dropdown"
                                        className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                                        placeholder="Search Book"
                                        required=""
                                    />
                                    <div className="absolute right-0 top-0 flex h-full items-center">
                                        <button
                                            type="submit"
                                            className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                                        >
                                            <svg
                                                className="h-[14px] w-[14px]"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                            <span>Search</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* Search Box Ends */}
                    </div>
                    {/* sort - filter */}
                    <div className="flex items-stretch space-x-3">
                        {/* Sort */}
                        <select
                            className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                            name="sortBy"
                            id="sortBy"
                            onChange={handleCategoryChange}
                        >
                            <option hidden value="">Sort</option>
                            <option value="name_asc">Name (A-Z)</option>
                            <option value="name_desc">Name (Z-A)</option>
                            <option value="year_asc">Publication Year (Oldest)</option>
                            <option value="year_desc">Publication Year (Newest)</option>
                        </select>
                    </div>
                </div>
            </header>
            <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    books.length ? books.map(book => <Book key={book.id} book={book} />) : ""
                }
            </div>
            {books.length ? "" : noBooksFound}
        </main>
    );
};

export default Books;
