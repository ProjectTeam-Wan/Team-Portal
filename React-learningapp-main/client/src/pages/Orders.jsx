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

const datesList = ['jan', 'feb', 'march', 'april'] // temporary dates db
const tabList = ['glxA', 'glxB', 'glxC', 'glxD']

function Orders() {
    const [currentDate, setCurrentDate] = useState('') // the date the choosen in the DatePick component (the date selected in the browser)
    const [currentTab, setCurrentTab] = useState(tabList[0])  //the tab the choosen in the OrdersTab component (the tab selected in the browser)

    function dateFromDatePick(value) {
        setCurrentDate(value)
    }

    function tabFromOrdersTab(value) {
        setCurrentTab(value)
    }


    return (
        <div style={{ width: '81vw' }}>
            Orders!
            <DatePick date={dateFromDatePick} dates={datesList} />
            {currentDate ? <OrdersTab selectedTab={tabFromOrdersTab} tabs={tabList} /> : 'date not picked'}
            {currentDate && currentDate + ' ' + currentTab}

        </div>
    )
}

export default Orders
