export interface Book {
    title: string;
    author?: string
    genre: string;
    blurb: string;
    coverImage: string;
    links: {
        amazon?: string;
        goodreads?: string;
    };
}