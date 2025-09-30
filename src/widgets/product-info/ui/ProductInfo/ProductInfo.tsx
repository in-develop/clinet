"use client";
import { useParams } from "next/navigation";

import { IFullProduct } from "@/widgets/product-info/model";
import { AddToCartButton } from "@/widgets/product-info/ui/AddToCartButton";
import { BaseInfo } from "@/widgets/product-info/ui/BaseInfo";
import { ImagesCarousel } from "@/widgets/product-info/ui/ImagesCarousel";
import { ProductCapacityProvider } from "@/widgets/product-info/providers";

// TODO: remove after adding backend integration
const mockProduct: IFullProduct = {
  id: 1,
  rating: 4.3,
  reviewCount: 10,
  name: "Hyaluronic serum for the eye contour Gialur",
  tags: ["Moisturising", "Soothing Care", "All skin types", "Easy Layering"],
  capacityOptions: [40, 75, 150],
  price: 34,
  discountPrice: 30,
  benefits: [
    "Provide instant deep and long-lasting hydration at the cellular level. Restore water balance.",
    "Have a pronounced softening, soothing and protective effect.",
    "Eliminate feelings of tightness, dryness, irritation and flaking.",
    "They increase skin tone and elasticity, significantly improving its micro-relief.",
    "They give a feeling of freshness, making the skin softer and silkier.",
  ],
  activeIngredients: [
    "Betaine, a natural moisturiser derived from beetroot, saturates cells with moisture and protects against dehydration and dryness.",
    "Aloe vera gel intensely moisturises, soothes, promotes rapid regeneration and tones.",
    "Hyaluronic acid enhances the skin's ability to retain moisture, improves its smoothness and elasticity.",
    "GP4G extract saturates cells with energy, protects their DNA, stimulates active regeneration and renewal.",
    "Ceramides protect the skin barrier and normalise its permeability.",
    "Hydropore, an active complex based on honey and lecithin, intensively moisturises and smoothes the skin.",
    "Colloidal silver provides antibacterial protection.",
  ],
  usageInstructions: [
    {
      instruction: "Start with clean skin",
      description: "Cleanse your face and gently pat dry.",
    },
    {
      instruction: "Apply an even layer",
      description:
        "Spread a generous layer over the face, avoiding the eye and lip area.",
    },
    {
      instruction: "Relax and hydrate",
      description: "Leave on for 10–15 minutes.",
    },
    {
      instruction: "Do not rinse",
      description: "Gently pat in the remaining product until fully absorbed.",
    },
    {
      instruction: "Repeat regularly",
      description: "Use 1-2 times a week for best descriptions.",
    },
  ],
  categoryId: 1,
  productBundleId: 1,
  stockQuantity: 25,
  images: [
    "/images/hover/5.png",
    "/images/completeSets/6.png",
    "/images/hover/6.png",
  ],
};

const ProductInfo = () => {
  const params = useParams<{ productId: string }>();

  const productId = parseInt(params.productId);

  // TODO: fetch product info with productId

  const data = mockProduct;

  return (
    <ProductCapacityProvider>
      <section className="container my-32 max-md:px-0! md:grid md:grid-cols-2">
        <ImagesCarousel images={data.images} productName={data.name} />

        <div className={"flex flex-col gap-10"}>
          <BaseInfo data={data} />
          <AddToCartButton
            productId={productId}
            stockQuantity={data.stockQuantity}
          />
        </div>
      </section>
    </ProductCapacityProvider>
  );
};

export { ProductInfo };
