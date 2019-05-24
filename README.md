<h1 align="center">
🌐 PetStore App POC using React and Express
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

# Demo
![Demo](https://github.com/ganeshmani/gmcart/blob/master/petstore_demo.gif)

## Prerequirements
- Node > 8
- npm
- MongoDB

## Clone or Download
```terminal
$ git clone https://github.com/ganeshmani/gmcart.git
$ npm i
```

## Client side (PORT 3000)
```bash
$ cd client
$ npm install
$ npm start
```
### To import the Mock Products Data to MongoDB
```terminal
$ cd /data
$ mongoimport --db gmcartdb --collection products --file products.json --jsonArray
```

## Server Side (PORT 3123)
```bash
$ npm install
$ npm run dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
