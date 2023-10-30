# manage_books
App to manage books using typescript

## The API endpoints for managing books are:

Retrieve all Books <br/>
Endpoint: GET /api/book/  <br/>
Usage: Access this endpoint to get a list of all books in the database. <br/>

Get Book by ID <br/>
Endpoint: GET /api/book/:id <br/>
Usage: Provide the ID parameter in the URL to retrieve details for a particular book. <br/>

Add a New Book <br/>
Endpoint: POST /api/book/ <br/>
Usage: Send a POST request with book details in the request body to add a new book.

Update Book <br/>
Endpoint: PUT /api/book/:id <br/>
Usage: Provide the ID parameter in the URL and send updated book details in the request body to modify a specific book.

Delete a Book <br/>
Endpoint: DELETE /api/book/:id <br/>
Usage: Provide the ID parameter in the URL to remove a specific book from the database.

## Instructions to set up and run the application locally

git clone https://github.com/prasad-mude-7/manage_books.git <br/>
cd manage_books <br/>
npm install <br/>
npm run build <br/>
npm start 

    
