import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import data from "../../FakeData.json";
import { Link } from "react-router-dom";
import { productType } from "../../Types/Types";
import { useDispatch } from "react-redux";
import { updateProducts } from "../../Redux/Actions";

const HomePage = () => {
  const [products, setProducts] = useState<productType[]>();

  const dispatch = useDispatch();

  //   retrive and set data here
  useEffect(() => {
    setProducts(data);
    dispatch(updateProducts(data));
  }, []);

  const getProducts = () => {
    const JSX = products?.map((product) => {
      return (
        <div className={styles.productCard}>
          <Link to={`/product/${product["_id"]}`}>
            <div className={styles.proImg}>
              <img src={product.image} />
            </div>
            <div className={styles.proMeta}>
              <p className={styles.proName}>{product.name}</p>
              <div className={styles.rating}>Implement Rating</div>
              <p className={styles.proPrice}>{product.price}</p>
            </div>
          </Link>
        </div>
      );
    });
    return JSX;
  };
  return (
    <div className={styles.home_wrapper}>
      <p className={styles.title}>The Shop</p>
      <div className={styles.filter}>Implement Filters Here</div>
      <div className={styles.products_wrapper}>{getProducts()}</div>
    </div>
  );
};

export default HomePage;
