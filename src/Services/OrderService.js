import { API_URL } from "../Constants/ApiConstant";

export function addOrder(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/add-order`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}

export function getListOrder(callback, id) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/get-list-order`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({id}),
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}

export function getListCartOrder(callback, id) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/get-list-cart-order`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({id}),
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}