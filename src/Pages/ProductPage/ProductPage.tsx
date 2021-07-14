import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { reduxStateType, productType } from "../../Types/Types";
import { InputNumber } from "antd";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<productType>();
  const [productQuantity, setProductQuantity] = useState(1);

  const products = useSelector((state: reduxStateType) => state.Products);

  useEffect(() => {
    products.map((product) => {
      if (product._id === id) {
        setProduct(product);
      }
    });
  }, [products]);

  const productControls = () => {
    return (
      <>
        <InputNumber
          size="large"
          min={1}
          max={10}
          defaultValue={productQuantity}
          onChange={(e) => {
            setProductQuantity(e);
          }}
        />
        <button>Add to cart</button>
      </>
    );
  };

  return (
    <div className={styles.productPageWrapper}>
      <div className={styles.productInfo}>
        <div>
          <div className={styles.productHeading}>{product?.name}</div>
          <img src={product?.image} className={styles.productImg} />
        </div>
        <div className={styles.productMeta}>
          <p className={styles.productPrice}>${product?.price}</p>
          <p className={styles.productCatagory}>
            Catagory: {product?.catagory}
          </p>
          <p className={styles.productDisc}>{product?.disc}</p>
          <div className={styles.productControls}>{productControls()}</div>
        </div>
      </div>
      <div className={styles.relatedProducts}></div>
    </div>
  );
};

export default ProductPage;
