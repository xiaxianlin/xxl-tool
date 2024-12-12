import PageContainer from '@/components/app/page-container';
import { DeleteIconButton, EditIconButton } from '@/components/common/buttons';
import { SimpleTable } from '@/components/common/simple-table';
import { getTimeColumns } from '@/constants/table';
import { PlusOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button, Card, Modal, Space, Switch, TableProps } from 'antd';
import React, { useMemo } from 'react';
import { UserFilter } from './components/filter';
import { UserFormModel } from './components/form';
import { useUserLogic } from './logic';

const SystemUserPage: React.FC = () => {
  const { table, form, status, showForm, handleDeleteUser } = useUserLogic();

  const handleDelete = useMemoizedFn((uid: string) => {
    Modal.confirm({
      centered: true,
      title: '删除用户',
      content: '你确定要删除此用户吗？',
      onOk: () => handleDeleteUser(uid),
    });
  });

  const columns = useMemo<TableProps<UserAccount>['columns']>(
    () => [
      {
        title: '用户名',
        key: 'username',
        dataIndex: 'username',
        width: 200,
      },
      {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
        render: (role: Role) => role.name,
        width: 200,
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        render: (value, user) => (
          <Switch
            loading={status.loading}
            checkedChildren="启用"
            unCheckedChildren="禁用"
            checked={value === 1}
            onChange={() => status.changeStatus(user.uid, value)}
          />
        ),
      },
      ...getTimeColumns({ sorter: true }),
      {
        title: '操作',
        key: 'action',
        width: 180,
        render: (_, user) => {
          return (
            <Space>
              <EditIconButton onClick={() => showForm(user)} />
              <DeleteIconButton onClick={() => handleDelete(user.uid)} />
            </Space>
          );
        },
      },
    ],
    [status, showForm, handleDelete],
  );

  return (
    <PageContainer size="large" title="用户管理">
      <Space direction="vertical" size="large">
        <UserFilter form={table.form} onQuery={table.query} onReset={table.reset} />
        <Card
          bordered={false}
          className="with-table"
          title={
            <Button type="primary" icon={<PlusOutlined />} onClick={() => showForm()}>
              添加用户
            </Button>
          }
        >
          <SimpleTable<UserAccount> rowKey="uid" columns={columns} {...table.props} />
        </Card>
      </Space>
      <UserFormModel {...form} />
    </PageContainer>
  );
};

export default SystemUserPage;
