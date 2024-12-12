import { addRole, deleteRole, getAllRoles, modifyRole } from '@/apis/role';
import { useBoolean, useMemoizedFn, useRequest } from 'ahooks';
import { useMemo, useState } from 'react';

export const useRoleLogic = () => {
  const [role, setRole] = useState<Role>();
  const [visible, { setTrue, setFalse: onHide }] = useBoolean(false);

  const { loading, data, refresh: onSuccess } = useRequest(getAllRoles);

  const { runAsync: handleAddRole } = useRequest(addRole, { manual: true, onSuccess });
  const { runAsync: handleModifyRole } = useRequest(modifyRole, { manual: true, onSuccess });
  const { runAsync: handleDeleteRole } = useRequest(deleteRole, { manual: true, onSuccess });

  const initialValues = useMemo(() => (role ? { key: role?.key, name: role?.name } : undefined), [role]);

  const showForm = useMemoizedFn((user?: Role) => {
    setTrue();
    setRole(user);
  });

  const onSubmit = useMemoizedFn(async (values: RoleFormModel) => {
    if (role) {
      return handleModifyRole(values);
    }
    return handleAddRole(values);
  });

  return {
    table: { loading, data: data || [] },
    form: {
      visible,
      initialValues,
      onHide,
      onSubmit,
    },
    showForm,
    handleDeleteRole,
  };
};
