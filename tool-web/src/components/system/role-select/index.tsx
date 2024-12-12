import { getAllRoles } from '@/apis/role';
import { useRequest } from 'ahooks';
import { Select } from 'antd';
import { FC, useMemo } from 'react';

interface RoleSelectProps {
  exclude?: string;
  onChange?: (key?: string) => void;
}
const RoleSelect: FC<RoleSelectProps> = ({ exclude, onChange }) => {
  const { data, loading } = useRequest(getAllRoles);
  const options = useMemo(() => {
    return (data || []).filter((role) => (exclude ? role.key !== exclude : true));
  }, [data, exclude]);
  return (
    <Select allowClear placeholder="请选择角色" loading={loading} onChange={onChange}>
      {options.map((role) => (
        <Select.Option key={role.key} value={role.key}>
          {role.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default RoleSelect;
