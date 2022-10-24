import * as React from 'react';
import { Form, Input } from "antd";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsReducer";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflowY: 'scroll'
};

export default function NestedModal() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onApply = async (values) => {
        try {
            dispatch(showLoading());
            setOpen(false);
            const response = await axios.post("/api/user/applyBooking", values,
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    }
                });
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                console.log('got it');
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    }


    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="error">
                Apply for Business Incubation
            </Button>

            <Modal
                open={open}
                onClose={handleClose}>

                <Box sx={{ ...style, width: 400 }}>
                    <Form layout="vertical" onFinish={onApply}>
                        <Form.Item name="name">
                            <Input className='applyForm' placeholder="Name" type="text" />
                        </Form.Item>

                        <Form.Item name="address">
                            <Input className='applyForm' placeholder="Address" type="text" />
                        </Form.Item>

                        <Form.Item name="city">
                            <Input className='applyForm' placeholder="City" type="text" />
                        </Form.Item>

                        <Form.Item name="state">
                            <Input className='applyForm' placeholder="State" type="text" />
                        </Form.Item>

                        <Form.Item name="email">
                            <Input className='applyForm' placeholder="Email" type="email" />
                        </Form.Item>

                        <Form.Item name="mobile">
                            <Input className='applyForm' placeholder="Mobile Number" type="number" />
                        </Form.Item>

                        <Form.Item name="companyName">
                            <Input className='applyForm' placeholder="Company Name" type="text" />
                        </Form.Item>

                        <Form.Item name="teamManagement">
                            <Input className='applyForm' placeholder="Team and Management" type="text" />
                        </Form.Item>

                        <Form.Item name="companyProfile">
                            <Input className='applyForm' placeholder="Products and Company Profile" type="text" />
                        </Form.Item>

                        <Form.Item name="problem">
                            <Input className='applyForm' placeholder="Problem" type="text" />
                        </Form.Item>

                        <Form.Item name="uniqueSolution">
                            <Input className='applyForm' placeholder="Unique Solution" type="text" />
                        </Form.Item>

                        <Button
                            className="primary-button my-2 full-width-button"
                            type="submit"
                        >
                            APPLY
                        </Button>
                    </Form>
                </Box>
            </Modal>
        </div>
    );
}
