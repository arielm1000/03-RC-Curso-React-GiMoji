import React from 'react';

function NavBar() {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>GifMoji</strong>
                        </a>
                    </div>

                    <div className="text-end">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;