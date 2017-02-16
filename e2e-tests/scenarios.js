'use strict';
describe('my app', function(){

    beforeEach(function() {
        browser.get('/#');
        browser.driver.findElement(by.id('username')).sendKeys('ned');
        browser.driver.findElement(by.id('password')).sendKeys('ned');
        browser.driver.findElement(by.id('login')).click();
    });

    it('open dashboard',function() {
        expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
    });

    it('search for event overview',function() {
        expect($('table').isPresent()).toBeTruthy();
        browser.driver.findElement(by.id('startEventId')).sendKeys('1');
        browser.driver.findElement(by.id('endEventId')).sendKeys('100');
        browser.driver.findElement(by.id('searchForEvents')).click();
        $$('table tr').count().then(function countRows(count) {
            expect(count).toBe(4);
        });
    });

    afterEach(function() {
        var logout = by.id('logout');
        browser.driver.isElementPresent(logout).then(function(isPresent){
            element(logout).click();
        });
    })
});