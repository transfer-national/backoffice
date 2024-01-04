import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FirstSection from '../pages/FirstSection';
import SecondSection from '../pages/SecondSection';
import ThirdSection from '../pages/ThirdSection';
import FifthSection from '../pages/FifthSection';
import ForthSection from '../pages/FourthSection';
import { Link , Navigate } from 'react-router-dom';

import { StepIcon } from '@mui/material';
import SixthSection from '../pages/SixthSection';

const steps = ['etape', 'etape', 'etape' , 'etape' , 'etape' , 'etape'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const num =0 ;
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
         <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
            
              StepIconComponent={(props) => (
                
                <StepIcon {...props} sx={{ color: activeStep === index  ? 'red' : 'rgba(255, 214, 136, 1)' }} />
              )}
            >
              
            </StepLabel>
          </Step>
        ))}
      </Stepper>
        {activeStep === steps.length ? (
          <Navigate to="/" replace />
        ) : (
          <React.Fragment>
            
            {activeStep === 0 && <FirstSection />}
            {activeStep === 1 && <SecondSection />}
            {activeStep === 2 && <ThirdSection />}
            {activeStep === 3 && <ForthSection />}
            {activeStep === 4 && <FifthSection />}
            {activeStep === 5 && <SixthSection />}
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1  , color: 'white' , fontSize: 12 , fontWeight: 'bold' , backgroundColor : 'rgba(185, 185, 185, 1)' , padding: 1 }}
              >
                Retour
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button 
                onClick={handleNext}
                sx={{ mr: 1  , color: 'white' , fontSize: 12 , fontWeight: 'bold' , backgroundColor : 'rgba(182, 62, 255, 1)' , padding: 1 }}
                >
                  
                {activeStep === steps.length - 1 ? 'Valider' : 'Suivant'}
                
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    );
  }

  
