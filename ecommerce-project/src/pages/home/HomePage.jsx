import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data)
            })
// we added 'http://localhost:3000 to vite.config.js so when it see /api auto the request will go to localhost:3000'

    }, [])


    return (
        <>

            <title>Ecommerce Project</title>


            <Header cart = { cart } />

            <div className="home-page">
                <ProductsGrid products={ products } />
            </div>
        </>
    );
}