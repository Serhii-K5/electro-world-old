import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "redux/operations";

import ProductCard from "components/ProductCard/ProductCard";
// import { selectProducts, selectSearchParams } from "redux/selectors";
import { selectProducts, selectFilteredProducts } from 'redux/selectors';
import { changefilteredProducts } from 'redux/slice/filteredProductsSlice';

import {
  Container,
  Ul,
  DivShift,
  DivPagination,
  DivPage,
} from './CatalogPage.styled';

import NavBar from 'components/NavBar/NavBar';

// import PaginationBar from "components/PaginationBar/PaginationBar"

// import FilterPanel from 'components/FilterPanel/FilterPanel';

// import PriceRange from 'components/PriceRange/PriceRange';
import PriceRange1 from 'components/PriceRange/PriceRange';
// import DraggableElement from 'components/Range/PriceRange';
import DraggableElement from 'components/PriceRange0/PriceRange';


import products1 from "../../assets/json/products.json";

const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilteredProducts);
  // const searchParams = useSelector(selectSearchParams);
  const [filteredData, setFilteredData] = useState(
    filteredProducts.length > 0 ? filteredProducts : products.length > 0 ? products : products1
  );

  if (filteredProducts.length === 0) {
    dispatch(changefilteredProducts(filteredData));
  }

  const [activePage, setActivePage] = useState(1);
  // const [activeFilter, setActiveFilter] = useState(false);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(changefilteredProducts(filteredData));
  }, [dispatch, filteredData]);
  

  // const handleFilter = filteredData => {
  //   setActiveFilter(true);
  //   setActivePage(0);
  //   setFilteredData(filteredData);
  // };

  const onClickIncrease  = () => {
    activePage < filteredData.length / 8 && setActivePage(activePage + 1);
  };
  
  const onClickDecrease  = () => {
    activePage > 0 && setActivePage(activePage - 1);
  };

  return (
    <div style={{ backgroundColor: '#f6f8fd' }}>
      <NavBar />
      <Container>
        <aside style={{minWidth: '250px'}}>
          {/* <p>Панель фильтров</p> */}
          {/* <PriceRange /> */}
          <PriceRange1 />
          <DraggableElement/>
        </aside>
        <section>
          {/* <FilterPanel data={products} onFilter={handleFilter} /> */}
          {filteredData.length === 0 &&
            products.length > 0 &&
            // !activeFilter &&
            setFilteredData(products)}
          {filteredData.length > 0 && (
            <Ul>
              {filteredData.map(
                (item, index) =>
                  // index > (activePage - 1) * 8 && index < activePage * 8 &&
                  index > (activePage - 1) * 8 - 1 &&
                  index < activePage * 8 && (
                    <li key={item.id}>
                      <ProductCard card={item} />
                    </li>
                  )
              )}
            </Ul>
          )}
          <DivPagination>
            {activePage > 1 && (
              <DivShift onClick={onClickDecrease}>{'<<'}</DivShift>
            )}
            {activePage === 1 && (
              <DivPage style={{ backgroundColor: 'var(--bg-second-green)' }}>
                {activePage}
              </DivPage>
            )}
            {activePage > 2 && (
              <div style={{ width: '50px', textAlign: 'center' }}>{'...'}</div>
            )}
            {activePage > 1 && (
              <DivPage onClick={onClickDecrease}>{activePage - 1}</DivPage>
            )}
            {activePage > 1 && (
              <DivPage style={{ backgroundColor: 'green' }}>
                {activePage}
              </DivPage>
            )}
            {filteredData.length / 8 > activePage && (
              <DivPage onClick={onClickIncrease}>{activePage + 1}</DivPage>
            )}
            {filteredData.length / 8 > activePage + 1 && (
              <div style={{ width: '50px', textAlign: 'center' }}>{'...'}</div>
            )}
            {filteredData.length / 8 > activePage && (
              <DivShift onClick={onClickIncrease}>{'>>'}</DivShift>
            )}
          </DivPagination>
          {/* <PaginationBar data={filteredData} page={activePage} /> */}
        </section>
      </Container>
    </div>
  );
};

export default CatalogCarsPage;