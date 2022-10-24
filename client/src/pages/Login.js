import { Form, Input, Button } from "antd";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/alertsReducer";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post('/api/user/login', values)
      dispatch(hideLoading())
      if (response.data.success) {
        toast.success(response.data.message);
        toast('Redirecting to home page');
        localStorage.setItem('token', response.data.data)
        navigate('/')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      dispatch(hideLoading())
      toast.error('Something went wrong')
    }
  };
  return (
    <div className="background overlay">
      <div className="authentication">
        <div className="authentication-form card p-3">
          <h1 className="card-title">Welcome Back</h1>
          <Form layout="vertical" onFinish={onLogin}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Password" type="password" />
            </Form.Item>

            <Button
              className="primary-button my-2 full-width-button"
              htmlType="submit"
            >
              LOGIN
            </Button>

            <Link to="/register" className="anchor my-2">
              Click to Register
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
