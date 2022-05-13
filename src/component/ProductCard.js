import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    // console.log(item);  {} item안에 item이 있어서 그 item의 키값을 찾아오기 위해 {}
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
    return (
        <div className='card' onClick={showDetail}>
            <img className='cradimg' src={item?.img}/>
            <div>{item?.choice == true ? "mdChoice":"1234"}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new == true ? "신제품":"헌제품"}</div>
        </div>
    )
}

export default ProductCard