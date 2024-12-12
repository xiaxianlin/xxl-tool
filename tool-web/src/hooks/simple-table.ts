import { useMemoizedFn, useRequest } from 'ahooks';
import { Form, FormInstance, TablePaginationConfig } from 'antd';
import { isUndefined } from 'lodash';
import { useEffect, useState } from 'react';

type Pagination = { current: number; pageSize: number };
type Sorter = GetSingle<Parameters<OnTableChange<any>>[2]>;
type Service<Result> = (params?: SearchParams) => Promise<SearchResult<Result>>;

type Options<F> = {
  preload?: boolean;
  initialFilter?: F;
};

type SimpleTableResult<T, F> = {
  sorter?: Sorter;
  form: FormInstance<F>;
  props: Omit<SimpleTableProps<T>, 'columns' | 'rowKey'>;
  query: () => void;
  reset: () => void;
  refresh: () => void;
};

const initOptions = <P>({ preload, ...options }: Options<P> = {}): Options<P> => {
  return {
    preload: isUndefined(preload) ? true : preload,
    ...options,
  };
};

const DEFAULT_PAGINATION = { current: 1, pageSize: 10 };

export const useSimpleTable = <T, F>(service: Service<T>, options?: Options<F>): SimpleTableResult<T, F> => {
  const { preload, initialFilter } = initOptions(options);

  const [sorter, setSorter] = useState<Sorter>();
  const [filter, setFilter] = useState<F | undefined>(initialFilter);
  const [pagination, setPagination] = useState<Pagination>({ ...DEFAULT_PAGINATION });

  const [form] = Form.useForm<F>();

  const { data, loading, run, refresh } = useRequest(service, { manual: true });

  const search = (page: Pagination, filter?: F, sorter?: Sorter) => {
    run({
      ...filter,
      page: page.current,
      size: page.pageSize,
      ...(sorter ? { field: sorter.column?.dataIndex, order: sorter.order === 'descend' ? 'DESC' : 'ASC' } : {}),
    });
  };

  const handleTableChange = useMemoizedFn((pagination: TablePaginationConfig, _: any, sorter: Sorter) => {
    const page = {
      current: pagination.current || DEFAULT_PAGINATION.current,
      pageSize: pagination.pageSize || DEFAULT_PAGINATION.pageSize,
    };
    setSorter(sorter);
    setPagination(page);
    search(page, filter, sorter);
  });

  const query = useMemoizedFn(() => {
    const filter = form.getFieldsValue();
    setFilter(filter);
    setPagination({ ...DEFAULT_PAGINATION });
    search(DEFAULT_PAGINATION, filter, sorter);
  });

  const reset = useMemoizedFn(() => {
    setPagination({ ...DEFAULT_PAGINATION });
    form.resetFields();
    search(DEFAULT_PAGINATION, undefined, sorter);
  });

  useEffect(() => {
    preload && search(pagination, filter, sorter);
    initialFilter && form.setFieldsValue(initialFilter);
  }, []);

  return {
    props: {
      loading,
      data: data?.data || [],
      pagination: { ...pagination, total: data?.total || 0, pageSizeOptions: [10, 20, 50] },
      onTableChange: handleTableChange,
    },
    form,
    sorter,
    query,
    reset,
    refresh,
  };
};
