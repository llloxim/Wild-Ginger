import React from 'react';
import Footer from './socials/Footer';
const ToGo = () =>{
    return(
        <div className='togo'>
            <ul className='togo-links'>
                    <h1 className='types'>Pick Up</h1>
                    <div className='deliver'>
                            <div className='pickup'>
                                <div className='redirect'><div>Call in to order</div> (510) 263-8128</div>
                            </div>
                            <div className='pickup'>
                                <h1>Order Onine For Pickup</h1>
                                <a href="https://order.mealkeyway.com/merchant/45372b3864734e755a63654b6f5155384a382b4a54513d3d/main" className='redirect'><button type="button" className='GrubHub'>Order Online</button></a>
                            </div>
                    </div>
                    <h1 className='types'>Delivery</h1>
                    <div className='deliver'>
                            <div className='pickup'>
                            <h1>Order Through Grubhub</h1>
                            <a href="https://www.grubhub.com/restaurant/wild-ginger-1239-park-st-alameda/614517" className='redirect'><button type="button" className='GrubHub'>Order with Grubhub</button></a>
                            </div>

                            <div className='pickup'>
                            <h1>Order Through DoorDash</h1>
                            <a href="https://www.doordash.com/store/wild-ginger-alameda-175284/" className='redirect'><button type="button" className='DoorDash'>Order with DoorDash</button></a>
                            </div>
                    </div>
            </ul>
            <div className='filler'></div>
            <Footer/>
        </div>
    );
}
export default ToGo