import { configAuth } from '../utils/constants'

const {
  BASE_URL,
  headers,
  credentials,
  endpoint } = configAuth;
const {
  ENDPOINT_REGISTER,
  ENDPOINT_AUTH,
  ENDPOINT_CHECKJWL,
  ENDPOINT_OUT } = endpoint;

const checkError = (res) => {
  if (res.ok) {
    return res.json();
  }
  else {
    console.log(' я в обработчике ошибок')
    console.log(res);
    return Promise.reject(res.status);
  }
}

export const register = ({ password, email }) => {
  console.log(password);
  console.log(email);
  console.log("я тут register")
  // debugger;
  return fetch(`${BASE_URL}${ENDPOINT_REGISTER}`,
    {
      method: 'POST',
      headers,
      credentials,
      body: JSON.stringify({ password, email })
    }
  )
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
    .then((response) => {
      console.log(' я внутри ветча');
      return checkError(response);
    })
};

export const authorize = (password, email) => {
  return fetch(
    `${BASE_URL}${ENDPOINT_AUTH}`,
    {
      method: 'POST',
      headers,
      credentials,
      body: JSON.stringify({ password, email })
    })
    .then((response) => {
      return checkError(response);
    })
};

export const checkToken = (token) => {
  return fetch(
    `${BASE_URL}${ENDPOINT_CHECKJWL}`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      credentials,
    })
    .then((response) => {
      return checkError(response);
    })
};


export const logout = () => {
  return fetch(
    `${BASE_URL}${ENDPOINT_OUT}`,
    {
      method: 'GET',
      headers,
      credentials,
    }
  ).then((res) => {
    return checkError(res);
  });

}
