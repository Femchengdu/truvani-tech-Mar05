# Truvani

## _Full Stack Developer Technical Interview_

This application is created to fetch and display recomended products.

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
By default, Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t <youruser>/image-name .
```

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 -- other-commands-to-be-updated
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT
