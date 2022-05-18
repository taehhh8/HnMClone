function getProducts(searchQuery) {
    return async(dispatch, getState)=>{  //함수는 항상 2개의 매개변수가 있다.
        let url = `https://my-json-server.typicode.com/taehhh8/HnMClone/products?q=${searchQuery}`; // json-server에서 알아서 해주는 부분 원래는 backend에서 설정해줘야한다.
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS", payload: { data } });
        // console.log(data)
        // setProductList(data);
    };  
}

function getProductDetail(id) {
    return async(dispatch, getState) => {
        let url =`https://my-json-server.typicode.com/taehhh8/HnMClone/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_DETAIL", payload: { data }}); //case만 추가해줘야한다.
    }
}

export const productAction = { getProducts, getProductDetail }     //앞으로는 함수를 여러개를 돌리기 떄문에 함수를 하나의 객체에 담하서 리턴을 해야한다.

