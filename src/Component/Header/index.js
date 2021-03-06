import React from 'react'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { BsLightbulbOffFill } from 'react-icons/bs'
export default function Header(props) {
    console.log(props);
    const {lightMode, setLightMode} = props
    return (
        <div className='header'>
            <h3> Crypto </h3>
            <div>
                {
                    lightMode ?
                        <BsLightbulbOffFill
                            onClick={() => setLightMode(!lightMode)}
                            size={28}
                            className='light-out'
                        />
                        :
                        <RiLightbulbFlashLine
                            onClick={() => setLightMode(!lightMode)}
                            size={33}
                            className='light-icon'
                        />
                }
            </div>
        </div>
    )
}
