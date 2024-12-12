import { TableProps } from 'antd';
declare global {
  type OnTableChange<T> = NonNullable<TableProps<T>['onChange']>;

  interface SimpleTableProps<T> {
    rowKey: string;
    data: T[];
    loading: boolean;
    columns: TableProps<T>['columns'];
    pagination: { current: number; pageSize: number; total: number; pageSizeOptions?: number[] };
    onTableChange: OnTableChange;
  }
}

export {};
