import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const placeholderImage = "/product-image-placeholder.svg";
interface Props {
  product: Product;
}
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <h3>
          <span>{product.name}</span>
        </h3>
        <span>$50</span>
      </div>
      <div className='product-image-container'>
        {product.images && (
          <Image
            alt={product.name ?? "Product Image"}
            src={placeholderImage}
            quality='85'
            fill
          />
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
