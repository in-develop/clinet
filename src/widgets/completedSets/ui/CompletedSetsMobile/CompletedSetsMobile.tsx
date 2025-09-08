"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../shared/ui/Tabs";
import { FC, useState } from "react";

import { BestsellersCarousel } from "@/widgets/bestsellers/ui/BestsellersCarousel";

import { pureSalvationeData, specialisteData } from "../../model";

import { CompletedSetsHeaderMobile, CompletedSetsCarouselMobile } from ".";

const CompletedSetsMobile: FC = () => {
  const getItemsByKey = (key: string) => {
    switch (key) {
      case "pureSalvatione":
        return pureSalvationeData;
      case "specialiste":
        return specialisteData;
      default:
        return [];
    }
  };

  return (
    <div className="mx-auto mt-20 w-full bg-white pl-5">
      <Tabs defaultValue="pureSalvatione">
        <div className="flex w-full flex-col gap-10 pr-5 pb-5">
          <p className="text-3xl leading-[110%] font-bold">Completed sets</p>

          <TabsList className="flex flex-row gap-3 sm:gap-6">
            <TabsTrigger value="pureSalvatione">Pure salvation</TabsTrigger>
            <TabsTrigger value="specialiste">Specialiste</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="pureSalvatione">
          <BestsellersCarousel items={getItemsByKey("pureSalvatione")} />
        </TabsContent>

        <TabsContent value="specialiste">
          <CompletedSetsCarouselMobile items={getItemsByKey("specialiste")} />
        </TabsContent>
      </Tabs>

      {/* <CompletedSetsHeaderMobile
        cosmeticType={cosmeticType}
        setCosmeticType={setCosmeticType}
      />

      <CompletedSetsCarouselMobile items={getItems()} /> */}
    </div>
  );
};

export { CompletedSetsMobile };
