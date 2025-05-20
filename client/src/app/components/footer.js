import React from 'react'

const FooterComponent = () => {
    return (
        <>
            <footer className="bg-dark text-white text-center text-lg-start mt-2">
                <div className="container p-2">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">About</h5>
                            <p>
                                Supervision Website for MOD of Hospital
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Contact</h5>
                            <p>Hotline IT: +62851-6603-6043</p>
                        </div>
                    </div>
                </div>


                <div className="text-center p-2 bg-secondary">
                    © 2025 IT DEPT RSI Sultan Agung Banjarbaru
                </div>
            </footer>
        </>
    )
}

export default FooterComponent
