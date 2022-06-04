import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
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
                <div className='heading'>
                    <p> Rank </p>
                    <p> Name </p>
                    <p> Price</p>
                    <p> Market Cap </p>
                    <p> Supply </p>
                    <p> Volume </p>
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
