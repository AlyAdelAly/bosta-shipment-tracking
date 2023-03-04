import { connect } from 'react-redux';
import moment from 'moment';
import { useTranslation } from "react-i18next";
import ProgressBarTracking from './progressBarTracking';

const TrackingShipment = (shipmentData: any) => {
    const { t } = useTranslation();
    return (
        <div className='border-solid border-gray-100 border-2 my-14 py-10 rounded-md'>
            <div >
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='grid'>
                            <label className='font-bold text-lg'>{t('Tracking No')} :{shipmentData?.shipmentData?.TrackingNumber}</label>
                            <span>{t(`${shipmentData?.shipmentData?.CurrentStatus?.state}`)}</span>
                        </div>
                        <div className='grid'>
                            <label className='font-bold text-lg'>{t('Last Updated')}</label>
                            <span>{moment(shipmentData?.shipmentData?.CurrentStatus?.timestamp).format("LLLL")}</span>
                        </div>
                        <div className='grid'>
                            <label className='font-bold text-lg'>{t('Seller Name')}</label>
                            <span>{shipmentData.shipmentData.provider}</span>
                        </div>
                        <div className='grid'>
                            <label className='font-bold text-lg'>{t('Delivered Date')}</label>
                            <span>{moment(shipmentData?.shipmentData?.CurrentStatus?.timestamp).format("L")}</span>
                        </div>
                </div>
                <ProgressBarTracking />
            </div>
        </div>);
}

const mapStateToProps = (state: any) => {
    return { shipmentData: state.shipment?.shipmentData }
};

export default connect(mapStateToProps)(TrackingShipment);