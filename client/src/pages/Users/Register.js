import { Form, Input, Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/alertsReducer";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login page");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="background overlay">
      <div className="authentication">
        <div className="authentication-form card p-3">
          <h1 className="card-title">Nice To Meet U</h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Name" type="text" required/>
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" type="email" required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Password" type="password" required/>
            </Form.Item>
            <Form.Item label="Repeat Password" name="repeatpassword">
              <Input placeholder="Repeat Password" type="password" required/>
            </Form.Item>

            <Button
              className="primary-button my-2 full-width-button"
              htmlType="submit"
            >
              REGISTER
            </Button>

            <Link to="/login" className="anchor my-2">
              Click to Login
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
