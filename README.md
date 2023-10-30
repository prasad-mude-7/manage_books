# manage_books
App to manage books using typescript

## The API endpoints for managing books are:

Retrieve all Books
Endpoint: GET /api/book/
Usage: Access this endpoint to get a list of all books in the database.

Get Book by ID
Endpoint: GET /api/book/:id
Usage: Provide the ID parameter in the URL to retrieve details for a particular book.

Add a New Book
Endpoint: POST /api/book/
Usage: Send a POST request with book details in the request body to add a new book.

Update Book
Endpoint: PUT /api/book/:id
Usage: Provide the ID parameter in the URL and send updated book details in the request body to modify a specific book.

Delete a Book
Endpoint: DELETE /api/book/:id
Usage: Provide the ID parameter in the URL to remove a specific book from the database.

## Instructions to set up and run the application locally

git clone https://github.com/prasad-mude-7/manage_books.git
cd manage_books
npm install
npm run build
npm start 

    