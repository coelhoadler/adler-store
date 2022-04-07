import React from "react";
import axios from "axios";
import ProductList from "../../components/ProductList/ProductList";
import Error from "../../components/Error/Error";

class ResultsFeature extends React.Component {

  state = {
    products: [],
    error: false
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/items${window.location.search}`)
      .then((res) => {
        const products = res.data;
        this.setState({ products });
        localStorage.setItem('products', JSON.stringify(products));
      }).catch((error) => {
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.error) {
      return (
        <Error />
      )
    } else {
      return (
        <>
          <ProductList products={this.state.products}></ProductList>
        </>
      );
    }
  }
}

export default ResultsFeature;
