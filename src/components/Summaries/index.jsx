import React from 'react'
import "./Summaries.css"
import { FaBagShopping } from 'react-icons/fa6'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import Chart from 'react-apexcharts'
import {newCustomersChart, ordersChart, salesChart, salesLost} from '../../chart'
import chroma from 'chroma-js'
import { PiChartLineDownBold } from 'react-icons/pi'
import { HiShoppingCart } from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa'

const Summaries = () => {
    const lightPrimaryColor = chroma("blue").alpha(0.1).css();
    const lightSuccessColor = chroma("#33c648").alpha(0.1).css();
    const lightDangerColor = chroma("#ff3b30").alpha(0.1).css();

  return (
    <div className='summaries'>
        {/* Start summary */}
        <div className="summary">
            <div className="row">
                <div 
                className="icon__container"
                style={{
                    background: lightSuccessColor,
                    color: 'var(--color-success)',
                }}>
                    <FaBagShopping/>
                </div>
                <small></small>
            </div>
            <small className='ratio'
            style={{
                background: lightSuccessColor,
                color: 'var(--color-success)',
            }}
            >
                25% <MdOutlineArrowDropUp/>
            </small>
            <div className="row">
                <div className="details">
                    <p className="text__muted">Sales</p>
                    <h1>₹3.36 Cr.</h1>
                </div>
                <div className="chart">
                    <Chart
                    {...salesChart}
                    width={'100%'}
                    height={60}
                    type='area'
                    />
                </div>
            </div>
        </div>
        {/* End summary */}

        {/* Start summary */}
        <div className="summary">
            <div className="row">
                <div 
                className="icon__container"
                style={{
                    background: lightDangerColor,
                    color: 'var(--color-danger)',
                }}>
                    <PiChartLineDownBold/>
                </div>
                <small></small>
            </div>
            <small className='ratio'
            style={{
                background: lightDangerColor,
                color: 'var(--color-danger)',
            }}
            >
                1.9% <MdOutlineArrowDropDown/>
            </small>
            <div className="row">
                <div className="details">
                    <p className="text__muted">Sales Lost</p>
                    <h1>₹28.7 Lakhs</h1>
                </div>
                <div className="chart">
                    <Chart
                    {...salesLost}
                    width={'100%'}
                    height={60}
                    type='area'
                    />
                </div>
            </div>
        </div>
        {/* End summary */}

        {/* Start summary */}
        <div className="summary">
            <div className="row">
                <div 
                className="icon__container"
                style={{
                    background: lightPrimaryColor,
                    color: 'var(--color-primary)',
                }}>
                    <HiShoppingCart/>
                </div>
                <small></small>
            </div>
            <small className='ratio'
            style={{
                background: lightPrimaryColor,
                color: 'var(--color-primary)',
            }}
            >
                +25% <MdOutlineArrowDropUp/>
            </small>
            <div className="row">
                <div className="details">
                    <p className="text__muted">Orders</p>
                    <h1>176</h1>
                </div>
                <div className="chart">
                    <Chart
                    {...ordersChart}
                    width={'100%'}
                    height={60}
                    type='area'
                    />
                </div>
            </div>
        </div>
        {/* End summary */}

        {/* Start summary */}
        <div className="summary">
            <div className="row">
                <div 
                className="icon__container"
                style={{
                    background: lightPrimaryColor,
                    color: 'var(--color-primary)',
                }}>
                    <FaUsers/>
                </div>
                <small></small>
            </div>
            <small className='ratio'
            style={{
                background: lightPrimaryColor,
                color: 'var(--color-primary)',
            }}
            >
                +25% <MdOutlineArrowDropUp/>
            </small>
            <div className="row">
                <div className="details">
                    <p className="text__muted">Consumers</p>
                    <h1>43.2 Lakhs</h1>
                </div>
                <div className="chart">
                    <Chart
                    {...newCustomersChart}
                    width={'100%'}
                    height={60}
                    type='area'
                    />
                </div>
            </div>
        </div>
        {/* End summary */}
    </div>
  )
}

export default Summaries