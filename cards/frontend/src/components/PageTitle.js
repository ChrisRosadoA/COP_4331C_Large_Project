import React from 'react';
import "./PageTitle.css"

function PageTitle()
{
   return(
      <header class="header-fixed">

      <div class="header-limiter">

        <h1><a href="#">Final Fantasy <span>Cards</span></a></h1>

        <nav>
          <a href="/">Home</a>
          <a href="/register">Register</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

      </div>

      </header>
   );
};

export default PageTitle;
