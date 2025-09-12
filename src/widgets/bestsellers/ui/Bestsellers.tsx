"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../shared/ui/Tabs";
import { pielCosmeticsLineData, skincareData } from "../model";

import { BestsellersCarousel } from "./BestsellersCarousel";

const Bestsellers = () => {
  const getItemsByKey = (key: string) => {
    switch (key) {
      case "piel":
        return pielCosmeticsLineData;
      case "skincare":
        return skincareData;
      default:
        return [];
    }
  };

  return (
    <div className="sm:bg-bg-block mx-auto w-full bg-white mt-20 sm:mt-32 pl-5 sm:pl-10">
      <Tabs defaultValue="piel">
        <div className="flex w-full flex-col gap-10 pr-5 pb-5 sm:flex-row sm:items-center sm:justify-between sm:pt-5 sm:pb-9">
          <p className="text-3xl leading-[1] font-bold sm:text-5xl sm:leading-[110%]">
            Bestsellers
          </p>

          <TabsList className="flex flex-row gap-3 sm:gap-6">
            <TabsTrigger value="piel">Piel Cosmetics Line</TabsTrigger>
            <TabsTrigger value="skincare">Skincare</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="piel">
          <BestsellersCarousel items={getItemsByKey("piel")} />
        </TabsContent>

        <TabsContent value="skincare">
          <BestsellersCarousel items={getItemsByKey("skincare")} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { Bestsellers };
