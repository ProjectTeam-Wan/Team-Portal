import React, { useState } from 'react'
import OrdersTab from '../components/Orders/OrdersTab'
import DatePick from '../components/Orders/DatePick'

const ordersDataBaseExample = [ //temporary db
    {
        month: 'jan',
        tab: 'network1',
        action: 'add'
    },
    {
        month: 'jan',
        tab: 'network2',
        action: 'add'
    },
    {
        month: 'feb',
        tab: 'network1',
        action: 'add'
    },
    {
        month: 'march',
        tab: 'network2',
        action: 'add'
    },
    {
        month: 'march',
        tab: 'network1',
        action: 'add'
    },
    {
        month: 'march',
        tab: 'network2',
        action: 'add'
    },
]

const datesList = ['jan', 'feb', 'march', 'april'] // temporary dates db, need to be from the big db

function Orders() {
    const [currentDate, setCurrentDate] = useState('') // the date the choosen in the DatePick component

    function dateFromDatePick(value) {
        setCurrentDate(value)
    }


    return (
        <div dir='rtl' style={{ width: '81vw' }}>
            הזמנות!
            <DatePick date={dateFromDatePick} dates={datesList} />
            {currentDate ? currentDate : 'date not picked'}
            <OrdersTab />
        </div>
    )
}

export default Orders
