import { addMenu, deleteMenu, getAllMenus, modifyMenu } from '@/apis/menu';
import { useBoolean, useMemoizedFn, useRequest } from 'ahooks';
import { useMemo, useState } from 'react';

export const useMenuLogic = () => {
  const [menu, setMenu] = useState<Menu>();
  const [parent, setParent] = useState<string>('');
  const [visible, { setTrue, setFalse: onHide }] = useBoolean(false);

  const { loading, data, refresh: onSuccess } = useRequest(getAllMenus);

  const { runAsync: handleAddMenu } = useRequest(addMenu, { manual: true, onSuccess });
  const { runAsync: handleModifyMenu } = useRequest(modifyMenu, { manual: true, onSuccess });
  const { runAsync: handleDeleteMenu } = useRequest(deleteMenu, { manual: true, onSuccess });

  const initialValues = useMemo(() => (menu ? { key: menu?.key, name: menu?.name } : undefined), [menu]);

  const showForm = useMemoizedFn((parent: string, menu?: Menu) => {
    setTrue();
    setMenu(menu);
    setParent(parent);
  });

  const onSubmit = useMemoizedFn(async (values: MenuFormModel) => {
    if (menu) {
      return handleModifyMenu(values);
    }
    return handleAddMenu({ ...values, parent });
  });

  return {
    table: { loading, data: data || [] },
    form: {
      visible,
      parent,
      initialValues,
      onHide,
      onSubmit,
    },
    showForm,
    handleDeleteMenu,
  };
};
