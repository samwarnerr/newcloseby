import React from 'react'


import logo from '../../images/white-logo.png';

const navbar = () => {
  return (
    <nav class="w-full flex py-6 justify-between items-center navbar bg-[#7704ba] h-[140px]">
        <a href="/"><img src={logo} alt="Ivyside" class="h-[140px]"/></a>
        <li class="text-decoration-none">
            <a class="-m-1.5 p-1.5">support</a>
            <a>about us</a>
        </li>
    </nav>


  )
}

export default navbar