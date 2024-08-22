import React, { useState,useEffect } from 'react'
import axios from 'axios'
import OrdersTab from '../components/Orders/OrdersTab'
import DatePick from '../components/Orders/DatePick'
import AccordionUsage from '../components/Orders/AccordionUsage'

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

// const datesList = ['jan', 'feb', 'march', 'april'] // temporary dates db
const tabList = ['glxA', 'glxB', 'glxC', 'glxD']
const actions = [{
    addEdge: {
        type: '47',
        newEdgeName: 'eliran',
        edgeCharge: 'ofek',
        oppEdges: {
            bakara: 1111,
            work: 2222
        }
    }
},
{
    addEdge: {
        type: '45',
        newEdgeName: 'ariel',
        edgeCharge: 'ofek',
        oppEdges: {
            bakara: 1111,
            work: 2222
        }
    }
},
{
    changeEdgeName: {
        existEdgeName: 'eliran',
        edgeMark: '1234',
        newEdgeName: 'tzabari'
    }
},
]

function Orders() {
    const [dates, setDates] = useState([])
    const [tabsList, setTabsList] = useState([])
    const [currentDate, setCurrentDate] = useState('') // the date the choosen in the DatePick component (the selected date in the browser)
    const [currentTab, setCurrentTab] = useState('')  //the tab the choosen in the OrdersTab component (the selected tab in the browser)

    useEffect(() => {
        async function datesList() {
            try {
                const response = await axios.get('http://localhost:3001/getDates'); // get request from the server
                setDates(response.data)
            } catch (error) {
                console.log(error.message);
            }
        };
        datesList();
      }, []);

      //tablist


    async function dateFromDatePick(date) {
        setCurrentDate(date)
        try {
            const response = await axios.get('http://localhost:3001/getTabs', {params: { date: date }}); // get request from the server
            setTabsList(response.data)
            setCurrentTab(response.data[0])
        } catch (error) {
            console.log(error.message);
        }
    }

    function tabFromOrdersTab(value) {
        setCurrentTab(value)
    }


    return (
        <div style={{ width: '81vw' }}>
            Orders!
            <DatePick onChange={dateFromDatePick} dates={dates} />
            {currentDate && tabsList.length > 0 ? <OrdersTab selectedTab={tabFromOrdersTab} tabs={tabsList} /> : 'date not picked'}
            {currentDate && currentTab ? currentDate + ' ' + currentTab : null}
            {/* {currentDate === 'jan2024' && currentTab === 'glxA' ? <AccordionUsage /> : null} */}

        </div>
    )
}

export default Orders
