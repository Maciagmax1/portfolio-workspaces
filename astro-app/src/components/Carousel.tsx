import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCnCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "sanity";

const slidesToShowClass = (slidesToShow: number) => {
  if (slidesToShow < 1 || slidesToShow > 8) {
    throw new Error("slidesToShow must be between 1 and 8");
  }
  switch (slidesToShow) {
    case 1:
      return "basis-full";
    case 2:
      return "basis-1/2";
    case 3:
      return "basis-1/3";
    case 4:
      return "basis-1/4";
    case 5:
      return "basis-1/5";
    case 6:
      return "basis-1/6";
    case 7:
      return "basis-1/7";
    case 8:
      return "basis-1/8";
    default:
      throw new Error("slidesToShow must be between 1 and 8");
  }
};

export function Carousel({
  carouselItems,
  options,
  slidesToShow = 2,
}: {
  carouselItems?: {
    label: string;
    description: string;
    image: ImageAsset;
    url: string;
  }[];
  options?: React.ComponentProps<typeof ShadCnCarousel>["opts"];
  slidesToShow?: number;
}) {
  return (
    <ShadCnCarousel className="w-full max-w-sm" opts={options}>
      <CarouselContent>
        {carouselItems?.map((item) => (
          <CarouselItem
            key={item.label}
            className={cn(
              "min-w-0 shrink-0 grow-0",
              slidesToShowClass(slidesToShow),
            )}
          >
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
