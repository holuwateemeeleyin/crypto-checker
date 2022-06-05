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
            {/* <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th> Rank </th>
                        <th> Name</th>
                        <th> Price</th>
                        <th> Market Cap</th>
                        <th> High (24Hr)</th>
                        <th> Supply </th>
                        <th> Volume </th>
                        <th> Change (24Hr)</th>
                    </tr>
                </thead>
                <tbody>
                    { cryptos ?
                    cryptos.map((item) => (
                        <Items item={item} key={item.id} />
                    )): null}
                </tbody>
            </Table> */}
        </div>
    )
}
