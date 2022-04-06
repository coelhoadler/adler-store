import React from "react";
import axios from "axios";
import * as S from './style';
import ReactLoader from "react-loader";
class DetailsFeature extends React.Component {

  state = {
    product: {},
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/api/items/MLA1115590875`).then((res) => { // TODO: get right product ID
      const product = res.data.item;
      this.setState({ product });
    });
  }

  render() {
    if (Object.entries(this.state.product).length) {
      return (
        <S.Wrapper>
          <S.LeftBlock>
            <img src={this.state.product.picture} />
            <h1>Description del producto</h1>
            <p>{this.state.product.description}</p>
          </S.LeftBlock>
  
          <S.RightBlock>
            <span>{this.state.product.condition}</span> - <span>{this.state.product.sold_quantity}</span>
            <h1>{this.state.product.title}</h1>
            <p>{this.state.product.price.amount}</p>
            <button>Comprar</button>
          </S.RightBlock>
        </S.Wrapper>
      );
    } else {
      return (
        <ReactLoader />
      )
    }
  }
}

export default DetailsFeature;
