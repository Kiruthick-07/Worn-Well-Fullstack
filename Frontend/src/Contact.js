import React from 'react'

const Contact = () => {
    const contact={
        textAlign:'center',
        
     }
     const footericon={
        display:'flex',
        columnGap:'40px',
        fontSize:'large',
        justifyContent:'center',
        margin:'20px',
        color:'gray',
        cursor:'pointer',
     };
     const buttonstyle={
      margin:'10px',
      padding:'10px 20px',
      borderRadius:'5px',
      borderStyle:'none',
      backgroundColor:'#302d2d',
      color:'white',
      fontSize:'15px',
     };
  return (
    <div style={contact}>
        <div>
            <h1>Style Starts With a Conversation</h1>
            <h4>Have a custom request, collaboration idea, or just want to talk trends? We’d love to connect.</h4>
            <button style={buttonstyle}>Contact Us</button>
        </div>
        <div style={footericon}>
  <i className="fa-brands fa-facebook"></i>
  <i className="fa-brands fa-instagram"></i>
  <i className="fa-brands fa-twitter"></i>
  <i className="fa-brands fa-linkedin"></i>
</div>
    </div>  
  )
}

export default Contact