import { API_URL } from "../Constants/ApiConstant";

export function getFileSlide(callback) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/get-slide`,  {
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

export function getListCategories(callback) {
    const token = localStorage.getItem('token');
    fetch(`${API_URL}/get-categories`,  {
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