# Truvani

## _Full Stack Developer Technical Interview_

This application is created to fetch and display a list of product from a backend server.

## Technology Used

### Front End:

- HTML
- CSS
- ReactJs
- Redux
- Redux Thunk
- Axios

### Back End:

- NodeJs
- ExpressJs
- Cors
- Dotenv

### Key Features:

- Display all products
- Add items to cart
- Display recomended products based on items in the cart
- Presist the items in the cart
- Indicate recommended items using a label or icon
- 2 API endpoints

## Installation

### Docker

This project is very easy to run using Docker.
By default, Docker will expose port 3000, so change this within the
Dockerfile if necessary.

Once in the root of the project, build and run the project by running

```sh
docker-compose up --build
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
localhost:3000
```

The backend server will be running on

```sh
localhost:2888
```

## License

MIT
