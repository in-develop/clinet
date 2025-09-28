import { Rating } from "@/shared/ui";
import { IFullProduct } from "@/widgets/product-info/model";
import { NeedHelp } from "@/widgets/product-info/ui/NeedHelp";
import { ProductCapacity } from "@/widgets/product-info/ui/ProductCapacity";
import { ProductPrice } from "@/widgets/product-info/ui/ProductPrice";
import { ProductTags } from "@/widgets/product-info/ui/ProductTags";

interface IBaseInfoProps {
  data: IFullProduct;
}

const BaseInfo = ({ data }: IBaseInfoProps) => {
  return (
    <div className={"text-light-black border-light-black border px-5 py-6"}>
      <h1 className={"mb-5 text-[32px] font-bold"}>{data.name}</h1>
      <Rating
        rating={data.rating}
        reviewCount={data.reviewCount}
        className={"mb-12"}
        showNumeric
      />
      <ProductPrice
        price={data.price}
        discountPrice={data.discountPrice}
        className={"mb-20"}
      />

      <ProductTags data={data.tags} className={"mb-8"} />

      <NeedHelp className={"mb-10"} />
      <ProductCapacity
        variant={"radio"}
        data={data.capacityOptions}
        onSelect={() => {}}
      />
    </div>
  );
};

export { BaseInfo };
