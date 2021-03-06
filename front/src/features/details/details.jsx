import React from "react";
import axios from "axios";
import ReactLoader from "react-loader";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import * as S from './style';
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Error from "../../components/Error/Error";
class DetailsFeature extends React.Component {

  state = {
    product: {},
    error: false
  };

  componentDidMount() {
    const currentProductId = localStorage.getItem("productId") || '';
    axios.get(`http://localhost:3000/api/items/${currentProductId}`).then((res) => {
      const product = res.data.item;
      this.setState({ product });
    }).catch((err) => {
      this.setState({ error: true });
    });
  }

  render() {
    if (Object.entries(this.state.product).length) {
      return (
        <>
          <Breadcrumb />
          <S.Wrapper>
            <S.LeftBlock>
              <ProductDescription product={this.state.product} />
            </S.LeftBlock>
    
            <S.RightBlock>
              <ProductInfo product={this.state.product} />
            </S.RightBlock>
          </S.Wrapper>
        </>
      );
    } else {
      if (this.state.error) {
        return (
          <Error />
        );
      } else {
        return (
          <ReactLoader />
        );
      }
    }
  }

}

export default DetailsFeature;
