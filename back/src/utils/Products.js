const axios = require("axios");

class Products {

  #products = {
    author: {
      name: "",
      lastname: "",
    },
    categories: ["Eletronica", "Informatica", "Games", "Celulares"], // TODO: get categories from JSON
    items: [],
  };

  #product = {
    author: {
      name: "",
      lastname: "",
    },
    item: {},
  };

  constructor() {}

  listAll(q) {
    return axios
      .get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${q}&offset=1&limit=4`
      )
      .then((search) => {
        search.data.results.map((item) => {
          this.#products.author.name = ''; // TODO: I don't understand this key
          this.#products.author.lastname = ''; // TODO: I don't understand this key
          this.#products.items.push({
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: item.price,
              decimals: item.price,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
          });
        });

        // const filters = search.data.filters;
        // const arr = filters.values();
        // const eArr = arr[Symbol.iterator]();

        // console.log('aqui: ', eArr.next().value.values.path_from_root)
        // arr.forEach(obj => {
        //   console.log(obj)
        //   // JSON.parse(obj)
        // })
        // console.log(filters.values(), JSON.stringify(filters.values()))
        // filters.map(element => {
        //   console.log(element)
        // });

        // obj.categories = item.filters.values.path_from_root.reduce((acc, curr) => {
        //   acc.push('sss')
        // }, []);
        return this.#products;
      });
  }

  list(productId) {
    const reqProductUrl = axios.get(`https://api.mercadolibre.com/items/${productId}`);
    const reqDescriptioUrl = axios.get(`https://api.mercadolibre.com/items/${productId}/description`);

    return axios
      .all([reqProductUrl, reqDescriptioUrl])
      .then(axios.spread((...responses) => {
        const item = responses[0].data;

        this.#product.author.name = ''; // TODO: I don't understand this key
        this.#product.author.lastname = ''; // TODO: I don't understand this key
        this.#product.item = {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: item.price,
          },
          picture: item.pictures[0].url,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          description: responses[1].data.plain_text
        };

        return this.#product;
      }));
  }
}

module.exports = Products;
