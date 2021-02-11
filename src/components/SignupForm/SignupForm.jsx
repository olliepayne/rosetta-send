const SignupForm = () => {
 // import useState, setup inital form data hook
 // handle input changes
 // submit form data through props

 return (
  <form>
   <label>*Username</label>
   <input name="username" type="text" />
   <label>*Email</label>
   <input name="email" type="text" />
   <label>*Password</label>
   <input name="password" type="password" />
   <label>*Confirm Password</label>
   <input name="passwordCheck" type="password" />
  </form>
 )
}

export default SignupForm