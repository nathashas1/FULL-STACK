import React from 'react';



class Footer extends React.Component {
    render() {
        return <div className="bottom-part">

              <div className="text">Follow me! I am friendly:</div>

              <div className="sm">


                  <a href="https://www.linkedin.com/in/nathasha-s-90a59a136/" className="linkedin" style={{ display: "table-cell" }} target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    Nathasha Surendran
                  </a>
                <a href="https://github.com/nathashas1" className="linkedin" style={{ display: "table-cell" }} target="_blank">
                  <i className="fab fa-github" />
                  Nathasha Surendran
                </a>
              </div>



          </div>;


    }
}

export default Footer;
