import React from 'react'
import { Link } from 'react-router-dom'
import NumericLabel from 'react-pretty-numbers'

export default function Items(props) {
    const { item } = props
    return (
        <Link to={`${item.id}`}>
            <div className='coin-row'>
                <p>{item.market_cap_rank}</p>
                <div className='symbol-img'> 
                    <img src={item.image} alt='image' width={25}/>
                    <p>{item.symbol.toUpperCase()}</p>
                </div>
                <NumericLabel params={{currency: true, commafy:true,  shortFormat: true}}>{item.current_price}</NumericLabel>
                <p className='hide-mobile'>{item.market_cap.toLocaleString()}</p>
                <p className='hide-mobile' >{item.total_supply === null ? 'unavailable' : item.total_supply.toLocaleString() }</p>
                <p className='hide-mobile'>${item.total_volume.toLocaleString()}</p>
                <p className={item.price_change_percentage_24h < 0 ? 'red': 'green'}>{item.price_change_percentage_24h.toFixed(3)}%</p>
            </div>
        </Link>
    )
}



{/* <tr>
        <td>{item.market_cap_rank}</td>
        <td>{item.name}</td>
        <td>{`$ ${item.current_price}`}</td>
        <td>{`$${item.market_cap}`}</td>
        <td>{`$${item.high_24h}`}</td>
        <td>{item.name}</td>
        <td>{item.name}</td>
        <td>{item.name}</td>
    </tr> */}