import { test, expect } from '@playwright/test';
import { DeleteUser, TestWrapper } from '../src/components';
import { USER_FORM } from '../src/constants';
import React, { lazy } from 'react';


test('DeleteUser form component', async ({ page }) => {
    // await chromium.launch({ headless: false, slowMo: 100 });
    await page.goto('users/');
    // // // console.log(page.content());
    await page.screenshot({ path: 'testScreenshot.png' });
    // // // await printDOM(page);
    // await expect(page).toHaveURL('users/');
    //    await expect(page.getByText(USER_FORM.HEADING.DELETE)).toBeInViewport();

    // const getComponent = (Component: React.ElementType) => <><Component /></>
    // const component = await mount(<TestWrapper><DeleteUser /></TestWrapper>);
    // console.log(component);
    // await expect(component).toContainText(USER_FORM.HEADING.DELETE);
});
