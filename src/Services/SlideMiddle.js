import { API_URL } from "../Constants/ApiConstant";

export function getListSlideMiddle(callback,id) {
    fetch(`${API_URL}/get-slide-middle`,  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then(res => res.json())
      .then(callback)
      .catch((err) => console.log(err));
}
