import React from 'react';

export default class task_images extends React.Component {
    render() {
      return (
          <div>
            <div className="imageContainer">
              <div className="Title">
                    Get Inspired
              </div>
            </div>
            <div className="easyClickContainer">

            <img src={window.home}   />

            <div className="easyClick">
                    <div className="easyClickText">
                      Tackle those home <br/>
                      projects & repairs you've<br/>
                      been putting off
                    </div>
                    <br/>
                    <div className="priceTag">

                          <p  >Avg. Project $46 - $117</p>
                    </div>
                    <button className="easyClickBtn">Book Handyman  </button>

            </div>
          </div>x

                 <div className="easyNav" >
                        <div className="mountingContainer">


                                <img className="mounting" src={window.wall}   />
                                <div className="text">
                                    Mount a TV or mirror
                                  </div>
                                  <br/>
                                  <div className="priceTag">

                                        <p  >Avg. Project $48 - $99</p>
                                  </div>
                                  <button className="easyClickBtn">Book Mounting  </button>
                        </div>

                  <div className="easyClickContainerAll">
                            <img className="mounting" src={window.livingroom}   />
                            <div className="text">
                                Put together furniture
                              </div>
                              <br/>
                              <div className="priceTag">

                                    <p  >Avg. Project $47 - $119</p>
                              </div>
                              <button className="easyClickBtn">Book Assembly  </button>
                  </div>

                   <div className="easyClickContainerAll">
                            <img className="mounting" src={window.moving}   />
                            <div className="text">
                                Lift & shift heavy items
                              </div>
                              <br/>
                              <div className="priceTag">

                                    <p  >Avg. Project $47 - $97</p>
                              </div>
                              <button className="easyClickBtn">Book Help Moving</button>
                  </div>

              </div>

          </div>
      );
    }
}
