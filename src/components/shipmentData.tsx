import React from 'react';
import { useSelector, connect } from 'react-redux';
import { ShipmentState} from '../store/types/shipmentType';
import moment from 'moment';
import styles from './shipmentDetails.module.scss';
import { useTranslation } from "react-i18next";
import help from '../assets/help.png'

const ShipmentTrackingData = (shipmentData: any, language: string) => {

    const error = useSelector((state: ShipmentState) => state.error);
    const { t } = useTranslation();

    console.log(shipmentData);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (shipmentData) {
        return (<div className='flex flex-col lg:flex-row'>

            <div className='p-5 w-full'>
                <h2 className='text-xl'>{t('Shipment Details')}</h2>
                <div className='border-solid border-gray-100 border-2'>
                    <div className='flex flex-col justify-between bg-gray-200'>
                        <ul className='inline-flex content-between flex-nowrap flex-row justify-around p-4'>
                            <li>{t('Branch')}</li>
                            <li>{t('Date')}</li>
                            <li>{t('Time')}</li>
                            <li>{t('Details')}</li>
                        </ul>
                    </div>
                    <div className={styles.shipementDetails__tracking_body}>

                        {shipmentData?.shipmentData?.TransitEvents?.map((item: { hub: string; timestamp: string; state: string }, index: React.Key | null | undefined) => {
                            return (

                                <div className='flex flex-col justify-between'key={index}>
                                    <ul className='inline-flex content-between flex-nowrap flex-row justify-around p-4 items-center'>
                                        <li>{t('Helwan')}</li>
                                        <li>{moment(item?.timestamp).format("L")}</li>
                                        <li>{moment(item?.timestamp).format("h:mm a")}</li>
                                        <li>{t(`${item?.state}`)}</li>
                                    </ul>
                                </div>
                            )
                        })
                        }

                    </div>
                </div>
            </div>

            <div className='p-5 w-full'>
                <h2 className='text-xl'>{t('Address')}</h2>
                <div className='bg-gray-200 p-6'>
                     {t('Delivery Address')}
                </div>
                <div className='flex border-2 border-b-gray-100 p-8 items-center justify-center' style={{fontFamily: "Cairo-Regular"}}>
                    <div>
                        <p className='text-md font-bold'>{t('Help Question')}</p>
                        <button className='bg-red-600 p-2 rounded-md mt-2'>{t('Report Problem')}</button>
                    </div>
                    <img className='w-20 lg:w-20' alt={'logo'} src={help} />
                </div>
            </div>

        </div >)
    }

    return null;
};

const mapStateToProps = (state: any) => {
    return { 
        shipmentData: state.shipment?.shipmentData, 
    }
};

export default connect(mapStateToProps)(ShipmentTrackingData);