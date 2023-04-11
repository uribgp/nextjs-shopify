import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./ProductCard.module.css";

const placeholderImage = "/product-image-placeholder.svg";
interface Props {
  product: Product;
}
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className={style.root}>
      <div className={style.productBackground}></div>
      <div className={style.productTag}>
        <h3 className={style.productTitle}>
          <span>{product.name}</span>
        </h3>
        <span className={style.productPrice}>$50</span>
      </div>
      {product.images && (
        <div className={style.productImageContainer}>
          <Image
            className={style.productImage}
            alt={product.name ?? "Product Image"}
            src={product.images[0].url ?? placeholderImage}
            quality='85'
            height={540}
            width={540}
          />
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
