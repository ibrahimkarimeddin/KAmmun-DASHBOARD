import React from 'react'
import { useGetStatistics } from 'api/statistics'
import { Col, Row } from 'reactstrap';
import StatisticsCards from 'components/@vuexy/statisticsCard/StatisticsCard';
import {  BsCart3, BsCodeSlash } from "react-icons/bs";
import { useTranslation } from 'utility/language';
import { history } from "../../../history";
import SpinnerComponent from 'components/@vuexy/spinner/Fallback-spinner';
import Tabels from './Tabels'
import YearChart from '../home/YearChart';
import { AiOutlineUser } from 'react-icons/ai';
import { GrDeliver } from 'react-icons/gr';
import { MdElectricRickshaw } from 'react-icons/md';
import { FaRedRiver } from 'react-icons/fa';
export default function StatisticsPage() {
    const { data: statistics, isLoading } = useGetStatistics(); 

    const t = useTranslation();
    if (isLoading) {
        return <SpinnerComponent />
    }
    return (
        <>
            <Row xs={1} sm={1} md={1} lg={3} xl={3} >
                <Col style={{ padding:"0.5rem" }} onClick={() => history.push('/driver')}>
                <div style={{ cursor: "pointer" }}>
                    <StatisticsCards
                        icon={<FaRedRiver className="warning" size={24} />}
                        stat={`${(statistics?.Category_Count)??1}`}
                        statContent={t(`You_have`)+"  "+((statistics?.Category_Count)??1)+"  "+ t(`catgory_in_your_Application`) }
                        CardName={t("show_all_driver")}
                        hideChart
                        iconCenter
                    />
                    </div>
                </Col>
                <Col  style={{padding:"0.5rem"}} onClick={() => history.push('customer')}>
                    <div style={{ cursor: "pointer" }}>

                    <StatisticsCards
                        icon={<AiOutlineUser className="warning" size={24} />}
                        stat={`${(statistics?.User_Count)??1}`}
                        statContent={t(`You_have`)+"  "+((statistics?.User_Count)??1)+"  "+ t(`User_in_your_Application`) }
                        CardName={t("show_all_customer")}
                        hideChart
                        iconCenter
                    />
                    </div>
                </Col>
            
                <Col style={{padding:"0.5rem"}} onClick={() => history.push('/orders')}>
                    <div style={{ cursor: "pointer" }} >

                    <StatisticsCards
                        icon={<BsCart3 className="warning" size={24} />}
                        stat={`${(statistics?.Order_Count)??1}`}
                        statContent={t(`You_have`)+"  "+((statistics?.Order_Count)??1)+"  "+ t(`Order_in_your_Application`) }
                        CardName={t("show_all_orders")}
                        hideChart
                        iconCenter
                    />
                    </div>
                </Col>
                <Col>
                </Col>
                <Col style={{padding:"0.5rem"}} onClick={() => history.push('/orders')}>
                    <div style={{ cursor: "pointer" }} >

                    <StatisticsCards
                        icon={<BsCart3 className="warning" size={24} />}
                        stat={`${(statistics?.Product_Count)??1}`}
                        statContent={t(`You_have`)+"  "+((statistics?.Product_Count)??1)+"  "+ t(`Products_in_your_Application`) }
                        CardName={t("show_all_orders")}
                        hideChart
                        iconCenter
                    />
                    </div>
                </Col>
                <Col>
                </Col>
                {/* <Col style={{padding:"0.5rem"}} onClick={() => history.push('/shops')}>
                    <div style={{ cursor: "pointer" }} >

                    <StatisticsCards
                        icon={<BsShop className="warning" size={24} />}
                        stat={`${statistics?.shops_count}`}
                        statTitle={t("_active.shops_count")}
                        hideChart
                        iconLeft
                    />
                    </div>
                </Col> */}
            </Row>
            {/* <Tabels  latest_orders={statistics?.latest_orders} */}
                     {/* latest_users={statistics?.busiest_drivers}  */}
                    {/* //  latest_user={statistics?.latest_users} */}
                      {/* /> */}
            {/* <YearChart /> */}
        </>
    )
}
