import React from 'react'
import "./TopMenu.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function TopMenu({data}) {

    return (
        <>
            <div className='top-menu'>
                <div className="top-menu-heading">
                    <div className='head'>{data.name}</div>
                    <div className='head-r'>
                        <div><WhatsAppIcon /></div>
                        <div>Share</div>
                    </div>
                </div>
            </div>
            <div className='top-contact'>
                <div className='top1'>
                    <div className="profile"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU" alt="" />
                    </div>

                    <div className="info">
                        <div className="address">
                            <p>
                                {data.loclevel3Name},{data.loclevel2Name}
                            </p>

                            <p className='eng'>
                               speaks english
                            </p>
                        </div>
                        <div className="address-buttons">
                            <button className='green'><PersonAddIcon/> Connect</button>
                            <button className='btn-r'><CallIcon/>  Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TopMenu