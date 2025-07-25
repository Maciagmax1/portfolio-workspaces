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
              slidesToShow === 1
                ? "basis-full"
                : slidesToShow === 2
                  ? "basis-1/2"
                  : slidesToShow === 3
                    ? "basis-1/3"
                    : slidesToShow === 4
                      ? "basis-1/4"
                      : "basis-full",
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
