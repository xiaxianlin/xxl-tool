import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';

interface ButtonProps {
  onClick?: () => void;
}

export const EditIconButton: FC<ButtonProps> = ({ onClick }) => (
  <Button size="small" icon={<EditOutlined />} onClick={onClick} />
);

export const DeleteIconButton: FC<ButtonProps> = ({ onClick }) => (
  <Button size="small" icon={<DeleteOutlined />} onClick={onClick} />
);

export const AddIconButton: FC<ButtonProps> = ({ onClick }) => (
  <Button size="small" icon={<PlusOutlined />} onClick={onClick} />
);
