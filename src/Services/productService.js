import { API_URL } from "../Constants/ApiConstant";

export function getListProducts(callback) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/get-products`,  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}

export function getListProductRelated(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/related-product`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}

export function getListProductDetail(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/get-product-detail`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}