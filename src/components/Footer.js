import React ,{useState}from 'react'

const Footer = () => {
    const[currYear] = useState(new Date().getFullYear());
  return (
   
    <div>
      <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
    </div>
  )
}

export default Footer
