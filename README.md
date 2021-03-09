# Truvani

## _Full Stack Developer Technical Interview_

This application is created to fetch and display a list of products and recommended products from a backend server.

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
- GER(Good Enough Recommender)

### Key Features:

- Display all products
- Add items to cart
- Display recomended products based on items in the cart
- Presist the items in the cart in the browser
- Indicate recommended items using a label or icon
- 2 API endpoints
- Products sorted in descending order when while cart has unearned rewards
  ![descending-sort](https://github.com/Femchengdu/truvani-tech-Mar05/blob/master/screenshots/recProdDesc.png?raw=true)

- Products sorted in ascending order while cart has all earned rewards

![ascending-sort](https://github.com/Femchengdu/truvani-tech-Mar05/blob/master/screenshots/recProdAsc.png?raw=true)

- Free shipping at $99

![free-shipping](https://github.com/Femchengdu/truvani-tech-Mar05/blob/master/screenshots/freeShipping.png?raw=true)

- Free shipping and Tote bag at $149

![free-shipping-plus-tote-bag](https://github.com/Femchengdu/truvani-tech-Mar05/blob/master/screenshots/freeShippingNdTote.png?raw=true)

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
