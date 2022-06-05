import React from 'react'
import Items from './Items'

export default function Home(props) {
    const { cryptos } = props
    console.log(cryptos);
    return (
        <div>
            <div className='search'>
                Search
            </div>
            <div className='coin-cointainer'>
                <div className='coin-heading'>
                    <p> Rank </p>
                    <p> Name </p>
                    <p> Price</p>
                    <p className='hide-mobile'> Market Cap </p>
                    <p className='hide-mobile'> Supply </p>
                    <p className='hide-mobile'> Volume </p>
                    <p> Change (24Hr)</p>
                </div>
                    {
                        cryptos ? 
                        cryptos.map((item)=>(
                            <Items key={item.id} item={item}/>
                        ))
                        :null
                    }
            </div>
        </div>
    )
}
