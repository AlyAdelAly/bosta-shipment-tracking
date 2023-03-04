import { configureStore } from '@reduxjs/toolkit';
import { shipmentReducer } from './reducers/shipmentReducer';

export const Store = configureStore({
  reducer: {
    shipment: shipmentReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    })
});