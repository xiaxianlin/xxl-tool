import { Alert, Button, Form, Input } from 'antd';
import React from 'react';
import { FieldType, useLoginLogic } from './logic';

const Login: React.FC = () => {
  const { form, submitting, error, onFinish } = useLoginLogic();

  return (
    <Form
      form={form}
      layout="vertical"
      size="large"
      variant="filled"
      requiredMark={false}
      onFinish={onFinish}
    >
      <Form.Item<FieldType>
        label="账号"
        name="username"
        rules={[{ required: true, message: '账号不能为空' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[{ required: true, message: '密码不能为空' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          loading={submitting}
          style={{ marginTop: 12 }}
        >
          登录
        </Button>
      </Form.Item>
      {error && <Alert message={error} type="error" showIcon />}
    </Form>
  );
};

export default Login;
