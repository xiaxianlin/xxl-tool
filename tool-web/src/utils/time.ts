import dayjs from 'dayjs';

export const formatTime = (value?: string | number, fmt = 'YYYY-MM-DD') => {
  if (!value) {
    return '-';
  }
  return dayjs(Number(value)).format(fmt);
};
