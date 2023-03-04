import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { getShipmentData } from '../store/actions/shipmentActions';
import { ShipmentState, ShipmentAction } from '../store/types/shipmentType';
import { ThunkDispatch } from 'redux-thunk';
import Shipment from './shipment';
import { useTranslation } from "react-i18next";



const Header = (shipmentData: any) => {

    const { t } = useTranslation();
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState("");
    const dispatch = useDispatch<ThunkDispatch<ShipmentState, undefined, ShipmentAction>>();

    const searchShipment = () => {
        if (trackingNumber) {
            dispatch(getShipmentData(trackingNumber));
        }
    };

    const checkErrorValidation = () => {
        if (trackingNumber === "") {
            setDetailsOpen(false);
        } else if (Object.keys(shipmentData.shipmentData).length === 0) {
            setDetailsOpen(true);
            setNotFound(true);
        } else {
            setNotFound(false);
            setDetailsOpen(true);
        }
    };

    useEffect(() => {
        checkErrorValidation();
    }, [shipmentData]);

    return (
        <div>
            <form className='flex flex-col items-center justify-center pt-32 leading-10 text-neutral-900'>
                <h1 className='font-bold text-4xl'>{t('Track Your Shipment')}</h1>
                <p className=''>{t('Enter Your Tracking Number')}</p>
                <input onChange={(e) => setTrackingNumber(e.target.value)} className='border-2 border-neutral-600 mb-4 px-2' />
                <button onClick={() => searchShipment()} type='button' className="w-[120px] bg-red-600 rounded-md" >{t('Search')}</button>
            </form>
            {
                detailsOpen ? (
                    notFound ? (
                        <div>
                            <span>
                                {t('No record of this tracking number can be found at this time, please check the number and try again later.')}
                            </span>
                        </div>
                    ) : (
                        <Shipment />
                    )
                ) : ""
            }
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return { shipmentData: state.shipment?.shipmentData }
};

export default connect(mapStateToProps)(Header);