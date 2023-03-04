import { ShipmentActionTypes } from '../actions/shipmentActionTypes';
import { ShipmentAction, ShipmentState } from '../types/shipmentType';

const initialState: ShipmentState = {
  loading: false,
  shipmentData: null,
  error: null,
};

export const shipmentReducer = (state = initialState, action: ShipmentAction) => {
  switch (action.type) {
    case ShipmentActionTypes.GET_SHIPMENT_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ShipmentActionTypes.GET_SHIPMENT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        shipmentData: action.payload,
        error: null,
      };
    case ShipmentActionTypes.GET_SHIPMENT_DATA_FAILED:
      return {
        ...state,
        loading: false,
        shipmentData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};