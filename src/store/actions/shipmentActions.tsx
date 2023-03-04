import { Dispatch } from 'redux';
import { ShipmentActionTypes } from './shipmentActionTypes';
import { getShipmentDataApi } from '../../api/shipmentApi';
import { ShipmentData, GetShipmentDataLoadingAction, GetShipmentDataSuccessAction, GetShipmentDataFailedAction, ShipmentAction } from '../types/shipmentType'

export const getShipmentDataLoading = (): GetShipmentDataLoadingAction => ({
    type: ShipmentActionTypes.GET_SHIPMENT_DATA_LOADING,
  });
  
  export const getShipmentDataSuccess = (data: ShipmentData): GetShipmentDataSuccessAction => {
    return {
      type: ShipmentActionTypes.GET_SHIPMENT_DATA_SUCCESS,
      payload: data,
    };
  };
  
  export const getShipmentDataFailed = (error: any): GetShipmentDataFailedAction => ({
    type: ShipmentActionTypes.GET_SHIPMENT_DATA_FAILED,
    payload: error,
  });

  export const getShipmentData = (id: any) => {
    return async (dispatch: Dispatch <ShipmentAction>) => {
      try {
        dispatch(getShipmentDataLoading());
        const response = await getShipmentDataApi(id);
        const data: ShipmentData = response.data;
        dispatch(getShipmentDataSuccess(data));
      } catch (error) {
        dispatch(getShipmentDataFailed(error));
      }
    };
  };