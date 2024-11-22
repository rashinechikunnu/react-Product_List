import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import { phonedata } from './Productdatas';



const ProductList = () => {
    const [items,useItem] = useState(phonedata)

    const DecQty = (id)=>{
        const newItem = items.map((item)=>
            item.id === id && item.qty > 1 ? {...item,qty:item.qty-1}:item
    )
        useItem(newItem) 
    };
    const IncQty = (id)=>{
        const newItem = items.map((item)=>
            item.id === id ? {...item,qty:item.qty+1}:item
    )
        useItem(newItem) 
    };
   


  return (

    <div>
        
        <h1 className='bg-info text-white'>Product List</h1>
        {items.map((item)=>(
            <div className='d-inline-flex'>
             <Card className='shadow p-3 m-2 bg-body rounded ' style={{ width: '13rem'}}  key={item.id}>
             <Card.Img variant="top" className='p-2' style={{ height: '13rem'}} src={require(`./assets/${item.image}.jpg`)}/>
                 <Card.Body>
                 <Card.Title>{item.model}</Card.Title>
                 <Card.Text>{item.desc}</Card.Text>
                 <h5>{item.price}</h5>
                 <div>
                     <p>Qty:
                     <Button onClick={()=>DecQty(item.id)} className='m-2'>-</Button>
                     {item.qty}
                     <Button onClick={()=>IncQty(item.id)}>+</Button>
                     </p>
                 </div>
                 
                 <Button variant="primary">add to cart</Button>
             </Card.Body>
         </Card>
         
         </div>
        ))}

       
    </div>
  )
}
export default ProductList
