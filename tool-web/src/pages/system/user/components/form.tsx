import RoleSelect from '@/components/system/role-select';
import { useAppModel } from '@/models/app';
import { useBoolean } from 'ahooks';
import { Form, FormProps, Input, Modal } from 'antd';
import { FC, useEffect, useState } from 'react';

interface UserFormModelProps {
  visible?: boolean;
  user?: UserAccount;
  onHide?: () => void;
  onSubmit?: (values: UserFormModel) => Promise<any>;
}
export const UserFormModel: FC<UserFormModelProps> = ({ visible, user, onHide, onSubmit }) => {
  const { configs } = useAppModel();
  const [form] = Form.useForm<UserFormModel>();
  const [changed, setChanged] = useState(false);
  const [submitting, { setTrue, setFalse }] = useBoolean(false);

  const required = !user;

  const handleCancel = () => {
    form.resetFields();
    onHide?.();
  };

  const handleFinished: FormProps<UserFormModel>['onFinish'] = (values) => {
    setTrue();
    onSubmit?.(values)
      .then(() => handleCancel())
      .finally(() => setFalse());
  };

  useEffect(() => {
    visible && form.setFieldsValue(user ? { username: user.username, role: user.role.key } : {});
  }, [visible, user]);

  return (
    <Modal
      centered
      title={required ? '添加用户' : '修改用户'}
      open={visible}
      onCancel={handleCancel}
      onOk={() => form.submit()}
      confirmLoading={submitting}
      okButtonProps={{ disabled: !changed }}
    >
      <Form
        form={form}
        autoComplete="off"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        style={{ marginTop: 24 }}
        onFinish={handleFinished}
        onValuesChange={() => !changed && setChanged(true)}
      >
        <Form.Item<UserFormModel> name="username" label="用户名" rules={[{ required }]}>
          <Input placeholder="请输入" maxLength={20} showCount />
        </Form.Item>
        <Form.Item<UserFormModel> name="password" label={required ? '密码' : '新密码'} rules={[{ required }]}>
          <Input placeholder="请输入" maxLength={20} showCount />
        </Form.Item>
        <Form.Item<UserFormModel> name="role" label="角色" rules={[{ required }]}>
          <RoleSelect exclude={configs?.adminRoleKey} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
