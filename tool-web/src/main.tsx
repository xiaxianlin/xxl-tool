import App from '@/app';
import dayjs from 'dayjs';
import ReactDOM from 'react-dom/client';
import { AppModel } from './models/app';
dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppModel.Provider>
    <App />
  </AppModel.Provider>,
);
