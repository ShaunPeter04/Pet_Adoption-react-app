import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm rounded-4 m-3">
                <div class="container-fluid px-4">
                    <a class="navbar-brand fw-bold text-warning" href="#">🐾 PetPortal</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav gap-2">
                            <li class="nav-item">
                                <a class="nav-link active bg-warning text-dark rounded-pill px-3 fw-semibold" aria-current="page" href="/">Add Pet</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light px-3" href="/search">Search Pet</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light px-3" href="/delete">Delete Pet</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light px-3" href="/view">View All Pets</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar