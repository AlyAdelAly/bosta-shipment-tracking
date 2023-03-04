import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import {StepLabel} from "@mui/material";
import { useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import Typography from '@mui/material/Typography';
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";


const ProgressBarTracking = (shipmentData: any) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { t } = useTranslation();
      
  return (
    <Stepper
      className="pt-10  content-center flex-wrap"
      alternativeLabel={!isMobile}
      orientation={isMobile?"vertical":"horizontal"}
      activeStep={shipmentData.shipmentData.TransitEvents.findIndex(
            (event: any) => event.state === shipmentData.shipmentData.CurrentStatus.state) + 1 
      }
    >
        {shipmentData.shipmentData.TransitEvents?.map((event: { state: any; reason: any; }, i: React.Key | null | undefined) =>
          event?.state ? (
          <Step key={i}>
            <StepLabel >
              <Typography style={{fontSize: '14px', fontFamily: 'Cairo-Regular'}} >
                 {t(`${event?.state}`)}
              </Typography>
              {event?.reason && (
                <Typography
                  style={{ color: "orange", fontFamily: 'Cairo-Regular', fontSize: '12px' }}
                >
                  {event?.reason}
                </Typography>
              )}
              </StepLabel>
          </Step>
        ) : (
          <></>
        )
      )}
    </Stepper>
  );
};

const mapStateToProps = (state: any) => {
    return { shipmentData: state.shipment?.shipmentData }
};

export default connect(mapStateToProps)(ProgressBarTracking);