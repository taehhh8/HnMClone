import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => { //api 호출 useEffect에서 해야한다.
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
        let searchQuery = query.get('q') || "";
        console.log("쿼리값은?",searchQuery);
        let url = `https://my-json-server.typicode.com/taehhh8/HnMClone/products?q=${searchQuery}`; // json-server에서 알아서 해주는 부분 원래는 backend에서 설정해줘야한다.
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProductList(data);
    }
    useEffect(()=>{
        getProducts(); // query값이 바낄때마다 호출되야한다.
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item, index)=> (   // productList에 아이템이 있는 개수만큼
                        <Col key={index} lg={3}>
                            <ProductCard item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll