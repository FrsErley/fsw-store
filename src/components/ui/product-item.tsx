import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div>
      <div className="flex max-w-[170px] flex-col gap-4">
        <div className="relative bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
            alt={product.name}
          />
          {product.discountPercentage > 0 && (
            <Badge className="absolute left-3 top-3 px-2 py-[2px]">
              <ArrowDownIcon size={14} /> {product.discountPercentage}%
            </Badge>
          )}
        </div>

        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{product.name}</p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                  R$ {product.totalPrice.toFixed(2)}
                </p>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs opacity-75 line-through">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-sm">
                R$ {product.totalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
