const { test, expect } = require('@playwright/test');
import DeleteUser from '../src/components/Forms/DeleteUser';
import { USER_FORM } from '../src/constants';
import { Provider } from 'react-redux';
import store from '../src/store';

test('DeleteUser form component', async ({ mount }) => {
    const component = await mount(
        <Provider store={store}>
            <DeleteUser />
        </Provider>)
    await expect(component).toHaveTitle(USER_FORM.HEADING.DELETE);
})