import React from 'react'
import './MiddleMenu.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function MiddleMenu({ data }) {

    const ele = data.products;

    
    return (
        <div className='MiddleMenu'>
            <div className='middle-menu-container'>
                <div className="middle-menu-heading">
                    <div className="business">
                        BUSINESS
                    </div>
                    <div className="reviews">
                        REVIEW
                    </div>
                </div>
                <div className="middle-container">
                    <h3>Commision Agent</h3>
                    <div className="middle-content">
                        <div className='left-content'>
                            <p>Market Name</p>
                            <p>Firm Name</p>
                            <p>Shop Number</p>
                        </div>
                        <div className='right-content'>
                            <p>Yeshwanthapura Mandi</p>
                            <p>MM Trading Company and Haji Dawood Usman ans sons</p>
                            <p>200</p>
                        </div>
                    </div>
                    <div className='mid-products'>
                        Products
                    </div>
                </div>
                <div className='tabs'>

                    { ele ?
                        ele.map((el,index) => {
                            return(
                                    
                                <div key={index} className="single-tab">
                                <div className='veg-content'>
                                    <div className='veg-img'>
                                        <img src="https://media.istockphoto.com/photos/food-background-with-assortment-of-fresh-organic-fruits-and-picture-id1203599963?k=20&m=1203599963&s=612x612&w=0&h=XY0PiCcaw1HShjCU9JgywVoY5JQC-lZnZfWqyyREOus=" alt="" />
                                    </div>
                                    <div className='veg-info'>
                                        <div className='dots'><MoreVertIcon /></div>

                                        <p>{el.cmdtyStdName}</p>

                                        <p className='light-text'>Yeshwanthapura Mandi, Banglore, KA</p>
                                        <p className='date'>$ {el.posts[0].computed.highestAvgPriceVarietyGrade.maxPrice} - {el.posts[0].computed.highestAvgPriceVarietyGrade.minPrice} / kg</p>
                                        <p className="veg-info-date">updated at {el.posts[0].updatedAt} PM</p>

                                    </div>
                                </div>
                                <div className='share'>
                                    <button><WhatsAppIcon />Share</button>
                                    <button id='interested'><CallIcon />Interested</button>
                                </div>
                            </div>
                                )
                        }):"some error while calling data"
                    }
                    



                </div>
            </div>
        </div>
    )
}

export default MiddleMenu