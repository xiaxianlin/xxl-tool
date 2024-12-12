import { useBoolean } from 'ahooks';
import { Form, FormProps, Input, Modal } from 'antd';
import { FC, useEffect, useState } from 'react';
import { keyRules } from '../util';

interface MenuFormModelProps {
  parent?: string;
  visible?: boolean;
  initialValues?: MenuFormModel;
  onHide?: () => void;
  onSubmit?: (values: MenuFormModel) => Promise<any>;
}
export const MenuFormModel: FC<MenuFormModelProps> = ({ parent, visible, initialValues, onHide, onSubmit }) => {
  const [form] = Form.useForm<MenuFormModel>();
  const [changed, setChanged] = useState(false);
  const [submitting, { setTrue, setFalse }] = useBoolean(false);

  const isEdit = !initialValues;

  const handleCancel = () => {
    form.resetFields();
    onHide?.();
  };

  const handleFinished: FormProps<MenuFormModel>['onFinish'] = (values) => {
    setTrue();
    onSubmit?.(values)
      .then(() => handleCancel())
      .finally(() => setFalse());
  };

  useEffect(() => {
    visible && initialValues && form.setFieldsValue(initialValues);
  }, [visible, initialValues]);

  return (
    <Modal
      centered
      title={isEdit ? '编辑菜单' : '添加菜单'}
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
        <Form.Item<MenuFormModel> name="key" label="Key" rules={keyRules}>
          <Input placeholder="请输入" maxLength={20} showCount />
        </Form.Item>
        <Form.Item<MenuFormModel> name="name" label="名称" rules={[{ required: true }]}>
          <Input placeholder="请输入" maxLength={20} showCount />
        </Form.Item>
        <Form.Item<MenuFormModel> label="父级菜单">{parent || '-'}</Form.Item>
      </Form>
    </Modal>
  );
};
