import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sanika</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Experinece</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">More About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Me</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar