import React from 'react'
import { useLocation } from "react-router-dom";
import ProductList from '../../components/ProductList/ProductList';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ResultsFeature = () => {
  const query = useQuery();

  return (
    <>
      <ProductList></ProductList>
      <h1>Results for {query.get('search')}</h1>
    </>
  )
}

export default ResultsFeature;