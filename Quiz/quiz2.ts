class Book {
    private isbn: string;
    private title: string;
    private author: string;
    private price: number;

    constructor(
        isbn: string,
        title: string,
        author: string,
        price: number
    ) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public getInfo(): string {
        return `${this.title} (${this.isbn}): ${this.price} บาท`;
    }
}

class Cart {
    private cartId: string;
    private books: Book[];

    constructor(cartId: string) {
        this.cartId = cartId;
        this.books = [];
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getTotalPrice(): number {
        let total = 0;

        for (const book of this.books) {
            total += book.getPrice();
        }

        return total;
    }

    public getInfo(): void {
        console.log("=== ใบเสร็จรับเงิน ===");
        console.log(`รหัสตะกร้า: ${this.cartId}`);
        console.log("รายการ:");

        for (const book of this.books) {
            console.log(`- ${book.getInfo()}`);
        }

        console.log(`ราคารวม: ${this.getTotalPrice()} บาท`);
    }
}

// ----------------------
// Main Program
// ----------------------

const book1 = new Book(
    "978-0132350884",
    "Clean Code",
    "Robert C. Martin",
    450
);

const book2 = new Book(
    "978-1234567890",
    "TypeScript Deep Dive",
    "Basarat Ali Syed",
    320
);

const cart = new Cart("C001");

cart.addBook(book1);
cart.addBook(book2);

cart.getInfo();