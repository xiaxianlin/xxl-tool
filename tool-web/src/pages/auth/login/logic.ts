import { login } from '@/apis/auth';
import { DEFAULT_ROUTE } from '@/router/routes';
import { setToken } from '@/utils/token';
import { useBoolean } from 'ahooks';
import { Form, message } from 'antd';
import { pick } from 'lodash';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export type FieldType = {
  username?: string;
  password?: string;
};

export const useLoginLogic = () => {
  const { redirect } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm<FieldType>();
  const [submitting, { set: setSubmitting }] = useBoolean(false);
  const [error, setError] = useState<string>();

  const onFinish = async (values: FieldType) => {
    setSubmitting(true);
    try {
      const formData = pick(values, ['username', 'password']) as LoginData;
      const data = await login(formData);
      setToken(data.access_token);
      setError(undefined);
      message.success('Welcome back 🎉');
      navigate(redirect ?? DEFAULT_ROUTE, { replace: true });
    } catch (e: any) {
      setError(e?.message || 'System Error');
    } finally {
      setSubmitting(false);
    }
  };

  return { form, submitting, error, onFinish };
};
