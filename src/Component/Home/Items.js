import React from 'react'
import { Link } from 'react-router-dom'
import NumericLabel from 'react-pretty-numbers'

export default function Items(props) {
    const { item } = props
    return (
        <Link to={`${item.id}`} className='link'>
            <div className='coin-row'>
                <p>{item.market_cap_rank}</p>
                <p> <img src={item.image} alt='image' width={25}/> {item.symbol.toUpperCase()}</p>
                <NumericLabel params={{currency: true, commafy:true,  shortFormat: true}}>{item.current_price}</NumericLabel>
                <NumericLabel params={{currency: true, commafy:true}}>{item.market_cap}</NumericLabel>
                <NumericLabel>{item.total_supply}</NumericLabel>
                <NumericLabel params={{currency: true, commafy:true}}>{item.total_volume}</NumericLabel>
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