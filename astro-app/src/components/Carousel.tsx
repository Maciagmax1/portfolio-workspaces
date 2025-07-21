import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCnCarousel,
} from "@/components/ui/carousel";
import type { ImageAsset } from "sanity";

export function Carousel({
  carouselItems,
}: {
  carouselItems?: {
    label: string;
    description: string;
    image: ImageAsset;
    url: string;
  }[];
}) {
  return (
    <ShadCnCarousel
      className="w-full max-w-xs"
      opts={{
        slidesToScroll: 1,
        loop: true,
        dragFree: true,
      }}
    >
      <CarouselContent>
        {carouselItems?.map((item) => (
          <CarouselItem key={item.label} className="">
            <div className="p-1">
              <Card>
                <img src={item.image.url} />
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{item.label}</span>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </ShadCnCarousel>
  );
}
