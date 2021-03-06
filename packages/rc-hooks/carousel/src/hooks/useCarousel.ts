/**
 * @file useCarousel
 */
import {useContext} from 'react';
import {Carousel} from '../lib/Carousel';
import {CarouselContext} from '../context/carousel';


export function useCarousel(): Carousel {
    const carouselContext = useContext<Carousel | null>(CarouselContext);

    if (carouselContext == null) {
        throw new Error('useCarousel must be use under RcCarousel');
    }

    return carouselContext;
}
