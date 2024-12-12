import { formatTime } from '@/utils/time';

export const getTimeColumns = (options?: { sorter?: boolean }) => [
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
    sorter: options?.sorter,
    render: (value) => formatTime(value),
  },
  {
    title: '最近修改时间',
    key: 'updateTime',
    dataIndex: 'updateTime',
    sorter: options?.sorter,
    render: (value) => formatTime(value),
  },
];
