import { Table } from 'antd';
import { AnyObject } from 'antd/es/_util/type';

export function SimpleTable<T extends AnyObject>({
  rowKey,
  data,
  columns,
  loading,
  pagination,
  onTableChange,
}: SimpleTableProps<T>) {
  return (
    <Table<T>
      sticky
      rowKey={rowKey}
      columns={columns}
      loading={loading}
      dataSource={data}
      onChange={onTableChange}
      scroll={{ y: 55 * 8 }}
      pagination={{
        ...pagination,
        size: 'small',
        showTotal: (total) => `共 ${total} 条数据`,
      }}
    />
  );
}
