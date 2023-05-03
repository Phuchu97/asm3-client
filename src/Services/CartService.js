import { API_URL } from "../Constants/ApiConstant";

export function addToCart(callback, data) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    fetch(`${API_URL}/add-cart`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({...data,role}),
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}

export function getListCart(callback,id) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/get-list-cart`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({id})
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}

export function deleteListCart(callback, id) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/delete-cart-item`,  {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({id})
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}
