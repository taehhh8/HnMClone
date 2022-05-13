import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
// 조건부를 return하는 곧 true면 상품 디테일 false면 다시 로그인페이지

const PrivateRoute = ({authenticate}) => {

    return authenticate == true ? <ProductDetail/> : <Navigate to ="/login"/>;
};

export default PrivateRoute