
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'

const Payment = () => {
    const [product,setProduct] = useState({
        name:"whatever",
        price:10,
        productBy:"me"
    })
    const makePayment =(token) => {
const body ={
    token,
    product,

}
const headers ={
    "Content-Type":"application/json"
}

return fetch('http://localhost:5000/payment',{
    method:"POST",
    headers,
    body:JSON.stringify(body)
})
.then(res =>{
    console.log(res)
    const {status} = res
    console.log(status);
})
.catch(err => console.log(err))
    }
    console.log(process.env.REACT_APP_KEY);
    return (
        <div>
             <h2>this is payment</h2>
             <StripeCheckout
             stripeKey={process.env.REACT_APP_KEY}
             token={makePayment}
             name='Pay now'
             amount={product.price * 100}
             >
                 <Button>Pay {product.price}</Button>
             </StripeCheckout>
            
        </div>
    )
}

export default Payment
