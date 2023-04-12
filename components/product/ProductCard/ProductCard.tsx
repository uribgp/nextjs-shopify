import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./ProductCard.module.css";

const placeholderImage = "/product-image-placeholder.svg";
interface Props {
  product: Product;
  variant?: "simple" | "slim";
}
const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    <Link href={`/products/${product.slug}`} className={style.root}>
      {variant === "slim" ? (
        <>
          <div className='inset-0 flex items-center justify-center absolute z-20'>
            <span className='bg-black text-white p-3 font-bold text-xl'>
              {product.name}
            </span>
          </div>
          <div>
            {product.images && (
              <div className={style.productImageContainerSlim}>
                <Image
                  className={style.productImage}
                  alt={product.name ?? "Product Image"}
                  src={product.images[0].url ?? placeholderImage}
                  quality='85'
                  height={320}
                  width={320}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={style.productBackground}></div>
          <div className={style.productTag}>
            <h3 className={style.productTitle}>
              <span>{product.name}</span>
            </h3>
            <span className={style.productPrice}>
              {product.price.value} {product.price.currencyCode}
            </span>
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
        </>
      )}
    </Link>
  );
};

export default ProductCard;
