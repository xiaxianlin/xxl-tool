import PageContainer from '@/components/app/page-container';
import { AddIconButton, DeleteIconButton, EditIconButton } from '@/components/common/buttons';
import { getTimeColumns } from '@/constants/table';
import { PlusOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button, Card, Modal, Space, Table, TableProps } from 'antd';
import React, { useMemo } from 'react';
import { MenuFormModel } from './form';
import { useMenuLogic } from './logic';

const SystemMenuPage: React.FC = () => {
  const { table, form, showForm, handleDeleteMenu } = useMenuLogic();

  const handleDelete = useMemoizedFn((key: string) => {
    Modal.confirm({
      centered: true,
      title: '删除菜单',
      content: '你确定要删除此菜单吗？',
      onOk: () => handleDeleteMenu(key),
    });
  });

  const columns = useMemo<TableProps<Menu>['columns']>(
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
              <EditIconButton onClick={() => showForm('', role)} />
              <DeleteIconButton onClick={() => handleDelete(role.key)} />
              {!role.parent && <AddIconButton onClick={() => showForm(role.key)} />}
            </Space>
          );
        },
      },
    ],
    [showForm, handleDelete],
  );

  return (
    <PageContainer size="large" title="菜单管理">
      <Card
        bordered={false}
        className="with-table"
        title={
          <Button type="primary" icon={<PlusOutlined />} onClick={() => showForm('')}>
            添加一级菜单
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
      <MenuFormModel {...form} />
    </PageContainer>
  );
};

export default SystemMenuPage;
