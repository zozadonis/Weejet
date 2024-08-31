"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";
import { teamData } from "@/data/teamData";
import Image from "next/image";

export default function TeamCarousel() {
    return (
        <>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    })
                ]}
            >
                <CarouselContent>
                    {teamData.map((item) => (
                        <CarouselItem key={item.id} className="flex flex-col items-center justify-center lg:basis-[50%]">
                        <a href={item.url} target="_blank">
                            <div className="h-[200px] w-[200px] relative">
                                <Image 
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    objectFit="contain"
                                />    
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-[20px] pt-1 font-medium">{item.name}</h3>
                                <p className="italic">{item.bio}</p> 
                            </div>
                        </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}