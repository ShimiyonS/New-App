import React from 'react'
import chililanding from "../../assets/chililanding.png";
import slicing from "../../assets/slicing.png";
import spinach from "../../assets/spinach.png";
import baling from "../../assets/baling.png";
import child from "../../assets/child.png";
import speaker from "../../assets/speaker.png";
import stove from "../../assets/stove.png";
import mobileOneDril from "../../assets/mobileOneDril.png";
import MobileProductCard from './MobileProductCard';

const productData = [
    {
        id: 1,
        productName: 'One dril',
        img: mobileOneDril,
        color: '#F5F8FF',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur illum quo. Laudantium non facilis provident ullam fuga repellendus, ea, vel laboriosam explicabo sunt ad saepe, et eum consequuntur eaque! Dolorum, dolores dolorem. Odit laboriosam similique atque, amet dolore ratione accusamus cum maiores voluptate eius sint fuga aliquid, illo earum! Laudantium, exercitationem animi. Totam maiores eligendi nisi sit recusandae vel. Ut minus repellat expedita quidem, dicta illo voluptatem asperiores repellendus doloribus, odio quasi quia deleniti voluptate, officiis perspiciatis iste. Atque porro, consectetur iusto harum cum adipisci amet autem impedit nihil!'
    },
    {
        id: 2,
        productName: 'Chilli Ladling Machine',
        img: chililanding,
        color: '#F0F3FD',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur illum quo. Laudantium non facilis provident ullam fuga repellendus, ea, vel laboriosam explicabo sunt ad saepe, et eum consequuntur eaque! Dolorum, dolores dolorem. Odit laboriosam similique atque, amet dolore ratione accusamus cum maiores voluptate eius sint fuga aliquid, illo earum! Laudantium, exercitationem animi. Totam maiores eligendi nisi sit recusandae vel. Ut minus repellat expedita quidem, dicta illo voluptatem asperiores repellendus doloribus, odio quasi quia deleniti voluptate, officiis perspiciatis iste. Atque porro, consectetur iusto harum cum adipisci amet autem impedit nihil!'
    },
    {
        id: 3,
        productName: 'Precision Slicing Machine',
        color: '#EAEFFC',
        img: slicing,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur illum quo. Laudantium non facilis provident ullam fuga repellendus, ea, vel laboriosam explicabo sunt ad saepe, et eum consequuntur eaque! Dolorum, dolores dolorem. Odit laboriosam similique atque, amet dolore ratione accusamus cum maiores voluptate eius sint fuga aliquid, illo earum! Laudantium, exercitationem animi. Totam maiores eligendi nisi sit recusandae vel. Ut minus repellat expedita quidem, dicta illo voluptatem asperiores repellendus doloribus, odio quasi quia deleniti voluptate, officiis perspiciatis iste. Atque porro, consectetur iusto harum cum adipisci amet autem impedit nihil!'
    },
    {
        id: 4,
        productName: 'Spinach Cleaning Machine',
        img: spinach,
        color: '#E5EAFA',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur illum quo. Laudantium non facilis provident ullam fuga repellendus, ea, vel laboriosam explicabo sunt ad saepe, et eum consequuntur eaque! Dolorum, dolores dolorem. Odit laboriosam similique atque, amet dolore ratione accusamus cum maiores voluptate eius sint fuga aliquid, illo earum! Laudantium, exercitationem animi. Totam maiores eligendi nisi sit recusandae vel. Ut minus repellat expedita quidem, dicta illo voluptatem asperiores repellendus doloribus, odio quasi quia deleniti voluptate, officiis perspiciatis iste. Atque porro, consectetur iusto harum cum adipisci amet autem impedit nihil!'
    },
    {
        id: 5,
        productName: 'Stacia Baling Machine',
        color: '#E0E5F8',
        img: baling,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur illum quo. Laudantium non facilis provident ullam fuga repellendus, ea, vel laboriosam explicabo sunt ad saepe, et eum consequuntur eaque! Dolorum, dolores dolorem. Odit laboriosam similique atque, amet dolore ratione accusamus cum maiores voluptate eius sint fuga aliquid, illo earum! Laudantium, exercitationem animi. Totam maiores eligendi nisi sit recusandae vel. Ut minus repellat expedita quidem, dicta illo voluptatem asperiores repellendus doloribus, odio quasi quia deleniti voluptate, officiis perspiciatis iste. Atque porro, consectetur iusto harum cum adipisci amet autem impedit nihil!'
    },
    {
        id: 6,
        productName: 'Stacia Child Tracking System',
        color: '#DBE1F7',
        img: child,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur illum quo. Laudantium non facilis provident ullam fuga repellendus, ea, vel laboriosam explicabo sunt ad saepe, et eum consequuntur eaque! Dolorum, dolores dolorem. Odit laboriosam similique atque, amet dolore ratione accusamus cum maiores voluptate eius sint fuga aliquid, illo earum! Laudantium, exercitationem animi. Totam maiores eligendi nisi sit recusandae vel. Ut minus repellat expedita quidem, dicta illo voluptatem asperiores repellendus doloribus, odio quasi quia deleniti voluptate, officiis perspiciatis iste. Atque porro, consectetur iusto harum cum adipisci amet autem impedit nihil!'
    },
    {
        id: 7,
        productName: 'Connect S',
        color: '#D5DCF5',
        img: speaker,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur illum quo. Laudantium non facilis provident ullam fuga repellendus, ea, vel laboriosam explicabo sunt ad saepe, et eum consequuntur eaque! Dolorum, dolores dolorem. Odit laboriosam similique atque, amet dolore ratione accusamus cum maiores voluptate eius sint fuga aliquid, illo earum! Laudantium, exercitationem animi. Totam maiores eligendi nisi sit recusandae vel. Ut minus repellat expedita quidem, dicta illo voluptatem asperiores repellendus doloribus, odio quasi quia deleniti voluptate, officiis perspiciatis iste. Atque porro, consectetur iusto harum cum adipisci amet autem impedit nihil!'
    },
    {
        id: 8,
        productName: 'Butterfly 3-burner Stove',
        color: '#D0D7F3',
        img: stove,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur illum quo. Laudantium non facilis provident ullam fuga repellendus, ea, vel laboriosam explicabo sunt ad saepe, et eum consequuntur eaque! Dolorum, dolores dolorem. Odit laboriosam similique atque, amet dolore ratione accusamus cum maiores voluptate eius sint fuga aliquid, illo earum! Laudantium, exercitationem animi. Totam maiores eligendi nisi sit recusandae vel. Ut minus repellat expedita quidem, dicta illo voluptatem asperiores repellendus doloribus, odio quasi quia deleniti voluptate, officiis perspiciatis iste. Atque porro, consectetur iusto harum cum adipisci amet autem impedit nihil!'
    }
];

export default function MobileProduct() {
    return (
        <div className="mobile-product">
            <div className="mobile-product-section1">
                <div className="mobile-product-title">Stacia Corp Products</div>
                <div className="mobile-product-overview">
                    <div className="mobile-overview--title">Overview</div>
                    <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. </p>
                </div>
            </div>
            <div className="mobile-product-section2">
                {
                    productData.map((data) => (
                        <MobileProductCard proName={data.productName}
                            proImg={data.img} color={data.color}
                            proDesc={data.desc}
                        />
                    ))
                }
            </div>
        </div>
    )
}
