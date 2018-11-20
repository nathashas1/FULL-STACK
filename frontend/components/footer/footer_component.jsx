import React from 'react';



class Footer extends React.Component {
    render() {
        return <div className="footerbottom">
                  <div className="footertext">Follow us! We're friendly: </div>
                  <div className="sm">
                    <div className="sm1">

                      <a href="https://www.linkedin.com/in/nathasha-s-90a59a136/" className="linkedin" style={{ display: "table-cell" }} target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://github.com/nathashas1" className="linkedin" style={{ display: "table-cell" }} target="_blank">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  <div className="sm2">Learn more about BaskRabbit</div>
              </div>
          </div>;


    }
}

export default Footer;
