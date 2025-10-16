import { expect } from 'chai';

describe('ApiDemos - App Navigation', () => {
  it('should open App -> Alert Dialogs', async () => {
    const appMenu = await $('~App');
    await appMenu.click();
    const alertDialogs = await $('~Alert Dialogs');
    await alertDialogs.click();
    const listDialog = await $('android=new UiSelector().text("LIST DIALOG")');
    expect(await listDialog.isDisplayed()).to.equal(true);
  });
});