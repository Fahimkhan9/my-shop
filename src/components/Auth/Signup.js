import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import './Signup.css'
const 
Signup = () => {
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [name,setName] =useState("")

const [isRegistered,setIsRegsitered]  =useState(false)

const toggleSignupAndLogin =() => {
    setIsRegsitered(() => !isRegistered)
}
const handleSignupsubmit =(e) => {
    e.preventDefault()

}
    return (
        <div className='signup pt-5'>
          <Form className='signup_form' onSubmit={handleSignupsubmit}>
              {
                  !isRegistered &&  <Form.Group controlId="formName">
                  <Form.Label>Enter Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                 
                </Form.Group>
              }
         
  <Form.Group controlId="formEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  onChange={e => setEmail(e.target.value)}  />
   
  </Form.Group>

  <Form.Group controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}  />
  </Form.Group>

  <Button variant="primary" type="submit" block>
    {isRegistered ? "Login":"Signup"}
  </Button>
  <p onClick={toggleSignupAndLogin} className='text-center mt-1' style={{cursor:"pointer"}}> {isRegistered ? 'Not Registered.Register now!' : 'Already registered.Login now!' }</p>
</Form>  
        </div>
    )
}

export default 
Signup
