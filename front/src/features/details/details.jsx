import React from "react";
import axios from "axios";
import ReactLoader from "react-loader";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import * as S from './style';
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
            <ProductDescription product={this.state.product} />
          </S.LeftBlock>
  
          <S.RightBlock>
            <ProductInfo product={this.state.product} />
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
