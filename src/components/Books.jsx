import Book from "./Book";

const books = [
    {
        "id": 5,
        "name": "1984",
        "publisher": "Secker & Warburg",
        "author": "George Orwell",
        "published_date": "June 8, 1949",
        "price": 9.99,
        "ratings": 4,
        "image": "https://miro.medium.com/v2/resize:fit:7084/1*6QXManBm7wsBgDiagqPH8Q.png"
    },
    {
        "id": 10,
        "name": "Alchemist, The",
        "publisher": "HarperCollins",
        "author": "Paulo Coelho",
        "published_date": "1988",
        "price": 12.99,
        "ratings": 5,
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
    },
    {
        "id": 4,
        "name": "Catcher",
        "publisher": "Little, Brown and Company",
        "author": "J.D. Salinger",
        "published_date": "July 16, 1951",
        "price": 11.99,
        "ratings": 3,
        "image": "https://media.thuprai.com/products/91LvoDqkF1L.jpg"
    },
    {
        "id": 1,
        "name": "Code Complete",
        "publisher": "Microsoft Press",
        "author": "Steve McConnell",
        "published_date": "June 19, 2004",
        "price": 39.99,
        "ratings": 4,
        "image": "https://m.media-amazon.com/images/I/61GzazUmKyL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 7,
        "name": "Clean Code",
        "publisher": "Prentice Hall",
        "author": "Robert C. Martin",
        "published_date": "August 11, 2008",
        "price": 34.99,
        "ratings": 5,
        "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51E2055ZGUL._SL1000_.jpg"
    },
    {
        "id": 11,
        "name": "Design Patterns",
        "publisher": "Addison-Wesley",
        "author": "Erich Gamma",
        "published_date": "November 10, 1994",
        "price": 49.99,
        "ratings": 5,
        "image": "https://balka-book.com/files/2023/08_14/14_20/u_files_store_5_6.jpg"
    },
    {
        "id": 6,
        "name": "Eloquent JS",
        "publisher": "No Starch Press",
        "author": "Marijn Haverbeke",
        "published_date": "December 4, 2018",
        "price": 29.99,
        "ratings": 4,
        "image": "https://eloquentjavascript.net/img/cover.jpg"
    },
    {
        "id": 8,
        "name": "Head First JS",
        "publisher": "O'Reilly Media",
        "author": "Elisabeth Robson",
        "published_date": "October 25, 2004",
        "price": 38.99,
        "ratings": 3,
        "image": "https://m.media-amazon.com/images/I/81h4jxKvcmS._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 3,
        "name": "JS: The Good Parts",
        "publisher": "O'Reilly Media",
        "author": "Douglas Crockford",
        "published_date": "May 30, 2008",
        "price": 24.99,
        "ratings": 4,
        "image": "https://m.media-amazon.com/images/I/511j6cza5bL.jpg"
    },
    {
        "id": 12,
        "name": "MM-Month: Essays",
        "publisher": "Addison-Wesley",
        "author": "Frederick P. Brooks Jr.",
        "published_date": "August 12, 1975",
        "price": 32.99,
        "ratings": 4,
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348430512i/13629.jpg"
    },
    {
        "id": 9,
        "name": "Python Crash",
        "publisher": "No Starch Press",
        "author": "Eric Matthes",
        "published_date": "November 30, 2015",
        "price": 25.99,
        "ratings": 5,
        "image": "https://m.media-amazon.com/images/I/81py-nCTfrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 2,
        "name": "TPP: Your Journey",
        "publisher": "Addison-Wesley",
        "author": "Dave Thomas, Andy Hunt",
        "published_date": "October 20, 1999",
        "price": 42.99,
        "ratings": 4,
        "image": "https://m.media-amazon.com/images/I/71DgBLETNqL._AC_UF1000,1000_QL80_.jpg"
    }
];

const Books = () => {
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
                        <form>
                            <div className="flex">
                                <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                                    <input
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
                    books.map(book => <Book key={book.id} book={book} />)
                }
            </div>
        </main>
    );
};

export default Books;
