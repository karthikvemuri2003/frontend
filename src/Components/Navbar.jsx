import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <h1 className="navbar-brand" >Bashyam</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/addzeo">Add Zeo</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/addbranch">Add Branch</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/"><button>Logout</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
