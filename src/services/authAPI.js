const baseURL = '/api/auth/'

export function signup(form) {
 return (
  fetch(baseURL + 'signup', {
   method: 'POST',
   headers: { 'content-type': 'application/json' },
   body: JSON.stringify(form)
  }, { mode: 'cors' })
   .then((res) => res.json())
 )
}

export function login(form) {
 return (
  fetch(baseURL + 'login', {
   method: 'POST',
   headers: { 'content-type': 'application/json' },
   body: JSON.stringify(form)
  }, { mode: 'cors' })
   .then((res) => res.json())
 )
}

export function getUser() {
 return (
  fetch(baseURL + 'getUser', { mode: 'cors' })
   .then((res) => res.json())
 )
}

export function logout() {
 return (
  fetch(baseURL + 'logout', { mode: 'cors' })
 )
}