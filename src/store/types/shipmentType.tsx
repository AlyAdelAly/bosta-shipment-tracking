import { ShipmentActionTypes } from "../actions/shipmentActionTypes";

export interface ShipmentState {
    loading: boolean;
    shipmentData: ShipmentData | null;
    error: string | null;
}

export interface ShipmentData {
    provider: string;
    CurrentStatus: {
        state: string;
        timestamp: string;
    };
    PromisedDate: string;
    TrackingNumber: string;
    TrackingURL: string;
    SupportPhoneNumbers: string[];
    TransitEvents: {
        state: string;
        timestamp: string;
        hub?: string;
    }[];
    CreateDate: string;
    isEditableShipment: boolean;
    nextWorkingDay: {
        dayDate: string;
        dayName: string;
    }[];
}

export interface GetShipmentDataLoadingAction {
    type: typeof ShipmentActionTypes.GET_SHIPMENT_DATA_LOADING;
}

export interface GetShipmentDataSuccessAction {
    type: typeof ShipmentActionTypes.GET_SHIPMENT_DATA_SUCCESS;
    payload: ShipmentData;
}

export interface GetShipmentDataFailedAction {
    type: typeof ShipmentActionTypes.GET_SHIPMENT_DATA_FAILED;
    payload: any;
}

export type ShipmentAction =
    | GetShipmentDataLoadingAction
    | GetShipmentDataSuccessAction
    | GetShipmentDataFailedAction;
