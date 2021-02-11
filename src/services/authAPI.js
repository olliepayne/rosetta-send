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