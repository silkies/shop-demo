import React, { useState, useEffect } from 'react';
import ProductsCarousel from '../carousel/carousel';
import getRelatedProducts from '../utils/products';
import { get } from 'lodash';
import './related-products.css';


export default function RelatedProducts(props) {
    const pathname = props.location.pathname;
    const regexSearch = /[0-9]+/.exec(pathname);
    const selectedId = get(regexSearch, "[0]");

    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchRelatedProducts = async () => {
        const relatedProducts = await getRelatedProducts(selectedId);
        setProducts(relatedProducts);
    }


    useEffect(() => {
        fetchRelatedProducts();
        setIsLoaded(true);
    }, [selectedId])

    if (!isLoaded) {
        return <div>Loading...</div>
    } else if (!products) {
        return (
            <div> No product
     </div>)
    }

    const numberOfCards = () => {
        if (products.length >= 4) {
            return 4;
        } else {
            return products.length;
        }
    }

    console.log(numberOfCards());

    return (
        <div className="products_wrap">
            {products.length > 0
                ? <div><div className="label-info">Related Products</div><ProductsCarousel numberOfCards={numberOfCards()} products={products} /></div>
                : <div className="label-info">No related products</div>}
        </div>
    );
}
