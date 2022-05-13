import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import { Button , ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap';

const ProductDetail = () => {
  let {id} = useParams() // useParams(객체) url뒤에 링크들이 12/14/5 라고 했을때 객체를 다 가져올탠데
  const [product, setProduct] = useState(null)
  const getProductDetail = async() => {
// api 호출
    let url =`https://my-json-server.typicode.com/taehhh8/HnMClone/products/${id}`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  
  return (
    <div>
        <Container>
          <Row>
            <Col className='product-img'>
              <img src={product?.img}/>
            </Col>
            <Col>
              <div>{product?.title}</div>
              <div>{product?.price}</div>
              <div>{product?.choice}</div>
              <ButtonGroup>
                  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                  <Dropdown.Item eventKey="1">S</Dropdown.Item>
                  <Dropdown.Item eventKey="2">M</Dropdown.Item>
                  <Dropdown.Item eventKey="2">L</Dropdown.Item>
                  </DropdownButton>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default ProductDetail