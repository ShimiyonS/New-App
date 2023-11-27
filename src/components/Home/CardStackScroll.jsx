import React, { useRef, useEffect } from 'react'
import "../../styles/Home/CardStackScroll.css"
import { scroll, animate } from 'https://cdn.skypack.dev/motion@10.13.1';

export default function CardStackScroll() {
    const cardsWrapperRef = useRef(null);
    const cardsRef = useRef([]);
    useEffect(() => {
        const $cardsWrapper = cardsWrapperRef.current;
        const $cards = cardsRef.current;
        const numCards = $cards.length;

        $cards.forEach(($card, index0) => {
            const index = index0 + 1;
            const reverseIndex0 = numCards - index;

            $card.style.paddingTop = `calc(${index} * var(--card-top-offset))`;

            scroll(
                animate($card, {
                    scale: [1, 1 - 0.1 * reverseIndex0],
                }),
                {
                    target: $cardsWrapper,
                    offset: [`${(index0 / numCards) * 100}%`, `${(index / numCards) * 100}%`],
                }
            );
        });
    }, []);

    return (
        <div className="card-stack-container">
            <div className="card-stack" ref={cardsWrapperRef}>
                <div className="card" ref={(el) => (cardsRef.current[0] = el)}>

                </div>
                <div className="card" ref={(el) => (cardsRef.current[1] = el)}>

                </div>
                <div className="card" ref={(el) => (cardsRef.current[2] = el)}>

                </div>
                <div className="card" ref={(el) => (cardsRef.current[3] = el)}>

                </div>  
            </div>
        </div>
    )
}
