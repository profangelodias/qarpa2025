const { expect, browser, $ } = require('@wdio/globals')

describe('Saucedemo login', () => {
    it('Validação de login válido', async () => {

        await $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/menuIV']").click()
       await $('~Login Menu Item').click()
        await $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/nameET']").setValue('bod@example.com');
        await $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/passwordET']").setValue('10203040');
        await $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/loginBtn']").click()

        await $('id=com.saucelabs.mydemoapp.android:id/menuIV').click()

        await expect($('~Logout Menu Item')).toBeExisting()
        await expect($('~Logout Menu Item')).toHaveText(
            expect.stringContaining('Log Out'))
    })

    it('Validação de login válido 2 - incompleto', async () => {

        const MenuButton = await $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/menuIV']")
        MenuButton.waitForClickable({ timeout: 5000 });
        MenuButton.click()

        await $('~Logout Menu Item').click()
        await driver.pause(10000);
        MenuButton.click()
       await $('~Login Menu Item').click()
        await $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/nameET']").waitForDisplayed({ timeout: 5000 }).setValue('bod@example.com');
        await $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/passwordET']").setValue('10203040');
        await $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/loginBtn']").click()

        await $('id=com.saucelabs.mydemoapp.android:id/menuIV').click()

        await expect($('~Logout Menu Item')).toBeExisting()
        await expect($('~Logout Menu Item')).toHaveText(
            expect.stringContaining('Log Out'))
    })
})
