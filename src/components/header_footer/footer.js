import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-5" style={{marginTop: `50px`}}>
       <br/>
      <div className="container">
        <hr />
        <br/>
        <div className="row" style={{marginTop: `45px`}}>
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h2>BOYAR CAMP</h2>
            <h5>
            &copy;{new Date().getFullYear().toString()}
            </h5>
          </div>
        </div>
        <br/>
      </div>
    </footer>
  )
}
