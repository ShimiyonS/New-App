import React, { useEffect, useRef } from 'react';
import { scroll, animate } from 'motion';
import reverse from "../assets/reverse.png"


const StackScroll = () => {

    const proDetails = [
        {
            id: 1,
            background: 'linear-gradient(259deg, #003362 -8.27%, #81497B 95.27%)'
        },
        {
            id: 2,
            background: 'linear-gradient(259deg, #7AA00C -8.27%, #FCDF00 86.58%)'
        },
        {
            id: 3,
            background: 'linear-gradient(259deg, #2A35B3 4.78%, #1485CB 94.3%)'
        },
        {
            id: 4,
            background: 'linear-gradient(259deg, #CB2B5E -8.27%, #773987 86.58%)'
        },
    ]
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
        <div className='stack-scroll'>
            <ul id="cards" ref={cardsWrapperRef}>
                <li className="card" id="card_1" ref={(el) => (cardsRef.current[0] = el)}>
                    <div className="card__content" style={{ background: proDetails[0].background }}>
                        <div className="card-img-box">
                            <div className="card-img-cover">
                                <img src={reverse} alt="" />
                            </div>
                        </div>
                        <div className="card-content-box">
                            <h1>Water Heating & Cooling Kettle</h1>
                            <h3>Domain name</h3>
                            <div className="content1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ex doloremque laboriosam </p>
                            </div>
                            <div className="content1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ex doloremque laboriosam </p>
                            </div>
                            <div className="learn-more">Learn more</div>
                        </div>
                    </div>
                </li>
                <li className="card" id="card_1" ref={(el) => (cardsRef.current[1] = el)}>
                    <div className="card__content" style={{ background: proDetails[1].background }}>
                        <div className="card-img-box">
                            <div className="card-img-cover">
                                <img src={reverse} alt="" />
                            </div>
                        </div>
                        <div className="card-content-box">
                            <h1>Water Heating & Cooling Kettle</h1>
                            <h3>Domain name</h3>
                            <div className="content1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ex doloremque laboriosam </p>
                            </div>
                            <div className="content1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ex doloremque laboriosam </p>
                            </div>
                            <div className="learn-more">Learn more</div>
                        </div>

                    </div>
                </li>
                <li className="card" id="card_1" ref={(el) => (cardsRef.current[2] = el)}>

                    <div className="card__content" style={{ background: proDetails[2].background }}>
                        <div className="card-img-box">
                            <div className="card-img-cover">
                                <img src={reverse} alt="" />

                            </div>
                        </div>
                        <div className="card-content-box">
                            <h1>Water Heating & Cooling Kettle</h1>
                            <h3>Domain name</h3>
                            <div className="content1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ex doloremque laboriosam </p>
                            </div>
                            <div className="content1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ex doloremque laboriosam </p>
                            </div>
                            <div className="learn-more">Learn more</div>
                        </div>

                    </div>
                </li>
                <li className="card" id="card_1" ref={(el) => (cardsRef.current[3] = el)}>

                    <div className="card__content" style={{ background: proDetails[3].background }}>
                        <div className="card-img-box">
                            <div className="card-img-cover">
                                <img src={reverse} alt="" />

                            </div>
                        </div>
                        <div className="card-content-box">
                            <h1>Water Heating & Cooling Kettle</h1>
                            <h3>Domain name</h3>
                            <div className="content1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ex doloremque laboriosam </p>
                            </div>
                            <div className="content1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ex doloremque laboriosam </p>
                            </div>
                            <div className="learn-more">Learn more</div>
                        </div>
                    </div>
                </li>


                {/* Repeat similar blocks for other cards */}
            </ul>
        </div>
    );
};

export default StackScroll;
