import React from 'react';
import { Link } from 'react-router-dom';

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

                      <Link to={`/taskdetails/General Handyman`} className="clickCategory">
                        Book Handyman
                      </Link>
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
                                  <Link to={`/taskdetails/Mounting and Installation`} className="clickCategory">
                                    Book Mounting
                                  </Link>

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
                              <Link to={`/taskdetails/Furniture Assembly`}  className="clickCategory">
                                Book Assembly
                              </Link>
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
                            <Link to={`/taskdetails/Moving and Packing`}  className="clickCategory">
                                Book Help Moving
                              </Link>
                  </div>

              </div>

          </div>
      );
    }
}
