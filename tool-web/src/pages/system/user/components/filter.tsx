import RoleSelect from '@/components/system/role-select';
import { Button, Card, Form, FormInstance, Input, Select } from 'antd';
import type React from 'react';
import { UserSearchParams } from '../types';

interface UserFilterProps {
  form: FormInstance<UserSearchParams>;
  onQuery?: () => void;
  onReset?: () => void;
}
export const UserFilter: React.FC<UserFilterProps> = ({ form, onQuery, onReset }) => {
  return (
    <Card bordered={false} styles={{ body: { paddingBlock: 24 } }}>
      <Form autoComplete="off" form={form} layout="inline" labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
        <Form.Item<UserSearchParams> name="username" label="用户名" style={{ flex: 1 }}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item<UserSearchParams> name="role" label="角色" style={{ flex: 1 }}>
          <RoleSelect />
        </Form.Item>
        <Form.Item<UserSearchParams> name="status" label="状态" style={{ flex: 1 }}>
          <Select allowClear placeholder="请选择">
            <Select.Option value={1}>启用</Select.Option>
            <Select.Option value={0}>禁用</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item style={{ flex: 1, marginInlineEnd: 0 }} wrapperCol={{ span: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <Button onClick={onReset}>重置</Button>
            <Button type="primary" onClick={onQuery}>
              查询
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
};
