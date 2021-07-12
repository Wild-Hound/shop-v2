import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import data from "../../FakeData.json";

interface productType {
  "-id": string;
  name: string;
  rating: string;
  catagory: string;
  image: string;
  disc: string;
  price: string;
}
const HomePage = () => {
  const [products, setProducts] = useState<productType[]>();

  //   retrive and set data here
  useEffect(() => {
    setProducts(data);
  }, []);

  const getProducts = () => {
    const JSX = products?.map((product) => {
      return (
        <div className={styles.productCard}>
          <div className={styles.proImg}>
            <img src={product.image} />
          </div>
          <div className={styles.proMeta}>
            <p>{product.name}</p>
            <div className={styles.rating}>Implement Rating</div>
            <p className={styles.proPrice}>{product.price}</p>
          </div>
        </div>
      );
    });
    return JSX;
  };
  return (
    <div className={styles.home_wrapper}>
      <p className={styles.title}>The Shop</p>
      <div className={styles.products_wrapper}>{getProducts()}</div>
    </div>
  );
};

export default HomePage;
