//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import App from './Components/App';
//import shared from './shared/shared';

//const { ID, VARIATION } = shared;

export default () => {
  const { React, ReactDOM } = window;

  const root = ReactDOM.createRoot(document.getElementById('template-page-order'));
  root.render(<App text="wallh" />);
};
