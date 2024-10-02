import { Provider } from 'react-redux';
import store from '../../store';

const TestWrapper = (Children: any) => {
    return (
        <Provider store={store}>
            <Children />
        </Provider>
    );
};

export default TestWrapper;
