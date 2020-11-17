import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'content-type': 'application/json;charset=UTF-8'
  }
})

instance.interceptors.request.use(
  (conf) => {
    // before request
    return conf
  },
  (error) => {
    // deal error
    return Promise.reject(error)
  }
)

// global error code
instance.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

const GET = (url, params) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })
}

const POST = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })
}

const DELETE = (url, params) => {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, { params })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })
}

const PUT = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .put(url, data)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  })
}
export {
  GET,
  POST,
  DELETE,
  PUT
}
