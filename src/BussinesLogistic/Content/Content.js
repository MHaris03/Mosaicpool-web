import React, { Component } from 'react';
import Slider from '../Slider/Slider';
import Photo7 from '../../Images/poo1.jpeg';
import Photo8 from '../../Images/poo2.jpeg';
import Photo9 from '../../Images/07.jpg';
import './content.css';
class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-md-3' id="colunm1settingforM">
                                    <div className='row'>
                                        <div className='col-12'>
                                            <img className='img-fluid' src={Photo7} id="colunm__setting1" />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <img className='img-fluid' src={Photo8} id="colunm__setting1" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 .ml-auto'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <Slider />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-3' id="colunm1settingforM">
                                    <div className='row'>
                                        <div className='col-12'>
                                            <img className='img-fluid' src={Photo9} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
export default Content;