import { DeleteIconButton, EditIconButton } from '@/components/common/buttons';
import PageContainer from '@/components/app/page-container';
import { getTimeColumns } from '@/constants/table';
import { PlusOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button, Card, Modal, Space, Table, TableProps } from 'antd';
import React, { useMemo } from 'react';
import { RoleFormModel } from './form';
import { useRoleLogic } from './logic';

const SystemRolePage: React.FC = () => {
  const { table, form, showForm, handleDeleteRole } = useRoleLogic();

  const handleDelete = useMemoizedFn((key: string) => {
    Modal.confirm({
      centered: true,
      title: '删除角色',
      content: '你确定要删除此角色吗？',
      onOk: () => handleDeleteRole(key),
    });
  });

  const columns = useMemo<TableProps<Role>['columns']>(
    () => [
      { title: '名称', dataIndex: 'name', width: 200 },
      { title: 'Key', dataIndex: 'key', width: 200 },
      ...getTimeColumns(),
      {
        title: '操作',
        key: 'action',
        width: 180,
        render: (_, role) => {
          return (
            <Space>
              <EditIconButton onClick={() => showForm(role)} />
              <DeleteIconButton onClick={() => handleDelete(role.key)} />
            </Space>
          );
        },
      },
    ],
    [showForm, handleDelete],
  );

  return (
    <PageContainer size="large" title="角色管理">
      <Card
        bordered={false}
        className="with-table"
        title={
          <Button type="primary" icon={<PlusOutlined />} onClick={() => showForm()}>
            添加角色
          </Button>
        }
      >
        <Table<Role>
          columns={columns}
          loading={table.loading}
          dataSource={table.data}
          scroll={{ y: 55 * 8 }}
          pagination={false}
        />
      </Card>
      <RoleFormModel {...form} />
    </PageContainer>
  );
};

export default SystemRolePage;
