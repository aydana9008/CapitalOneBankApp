var CustomLocators = require('./customLocators.js');
var EC = protractor.ExpectedConditions;
var HomePage = require('../POM/HomePage.page.js');

var Base = function(){
this.Homepage = "https://www.capitalone.com/";

this.navigateTo = function(url){
    browser.get(url);
}





this.DropdownSingleText = function(link, linkText){
    expect(link.isDisplayed()).toBe(true);
    expect(link.getText()).toEqual(linkText);
}
    

this.DropdownSingleLink = function(link, element, linkTitle){
    link.click();
browser.wait(EC.visibilityOf(element), 12000).then(()=>{
    expect(browser.getTitle()).toEqual(linkTitle);
   browser.navigate().back();
    HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER);
})
}

this.DropdownMultiLinks = function(link, title){
   link.count().then(count=>{
       for(let i = 0; i < count; i++){
          expect(link.get(i).isDisplayed()).toBe(true);
          expect(link.get(i).getText()).toEqual(title[i]);
       }
   })
}




}

module.exports = new Base();