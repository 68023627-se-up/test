var Book = /** @class */ (function () {
    function Book(isbn, title, author, price) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
    }
    Book.prototype.getPrice = function () {
        return this.price;
    };
    Book.prototype.getInfo = function () {
        return "".concat(this.title, " (").concat(this.isbn, "): ").concat(this.price, " \u0E1A\u0E32\u0E17");
    };
    return Book;
}());
var Cart = /** @class */ (function () {
    function Cart(cartId) {
        this.cartId = cartId;
        this.books = [];
    }
    Cart.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Cart.prototype.getTotalPrice = function () {
        var total = 0;
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            total += book.getPrice();
        }
        return total;
    };
    Cart.prototype.getInfo = function () {
        console.log("=== ใบเสร็จรับเงิน ===");
        console.log("\u0E23\u0E2B\u0E31\u0E2A\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32: ".concat(this.cartId));
        console.log("รายการ:");
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            console.log("- ".concat(book.getInfo()));
        }
        console.log("\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21: ".concat(this.getTotalPrice(), " \u0E1A\u0E32\u0E17"));
    };
    return Cart;
}());
// ----------------------
// Main Program
// ----------------------
var book1 = new Book("978-0132350884", "Clean Code", "Robert C. Martin", 450);
var book2 = new Book("978-1234567890", "TypeScript Deep Dive", "Basarat Ali Syed", 320);
var cart = new Cart("C001");
cart.addBook(book1);
cart.addBook(book2);
cart.getInfo();
