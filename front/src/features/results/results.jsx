import React from "react";
import axios from "axios";
import ProductList from "../../components/ProductList/ProductList";

class ResultsFeature extends React.Component {

  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/items${window.location.search}`)
      .then((res) => {
        const products = res.data;
        this.setState({ products });
        localStorage.setItem('products', JSON.stringify(products));
      });
  }

  render() {
    return (
      <>
        <ProductList products={this.state.products}></ProductList>
      </>
    );
  }
}

export default ResultsFeature;
