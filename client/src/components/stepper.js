import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Submitted', 'Approved', 'Booked'];

export default function HorizontalLinearStepper(props) {
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    let stat;
    if (props.status === "Submitted") { stat = 1 }
    if (props.status === "Approved") { stat = 2 }
    if (props.status === "Booked") { stat = 3 }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={stat}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}
