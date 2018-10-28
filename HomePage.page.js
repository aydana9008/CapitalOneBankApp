var CustomLocators = require('../Utilities/customLocators.js');
var EC = protractor.ExpectedConditions;

var HomePage = function(){
    //CC dropdown
    this.TitleOfLink = $$("title").get(0);
this.CapitalOneLogo = $(".site-header__logo");
this.CapitalOneOnAcctTask = $(".ci-header--logo-container");
this.Dropdowns = $$(".site-header__primary-nav>button");
this.TitlesOnCCDropdown = $$(".ods-row.site-L2__audience button");
this.FeaturedCCList = $$(".ods-accordion__section>ul div:nth-child(2)>a>span");
this.QualifiedButton = $("#navtest-b-l2-cta-seeifyoureprequalified");
this.FindCCLists = element.all(by.xpath("//*[contains(@class, 'ods-accordion__section--active')]/ul/li[@class='ods-list__list-item  ' or @class='ods-list__list-item  site-header__desktop-only']/a"));
this.elementOnHomePage = $("h2#page-heading");
this.elementOnFindCC = $$(".col.m12").get(0);
this.elementOnTipTools = $(".breadcrumbs");
this.TipsAndToolsList = $$(".navtest-b-l2-list__tipstools .ods-list__list>li>a");
this.AccountTasks = $$(".site-L2__account-tasks li>a");
this.SimplifyAccount = $(".ods-text--medium.ods-text--light");
this.ParagUnderCC = $("p.ods-text--small");
this.elementOnCreditwise = $(".landing-page-header .logo");
this.elementOnAcctTasks = $("h1");
this.elementOnPersonalLink = $$("p[property='reviewBody']").get(0);


//Sav&Check dropdown
this.TitlesOnSCDropdown = $$(".ods-row.site-L2__audience button");
this.SaveList = $$(".navtest-b-l2-list__savings li>a");
this.CheckList = $$(".navtest-b-l2-list__checking li>a");
this.CompareButton = $("#navtest-b-l2-cta-compareallaccounts");
this.FindBankSV = $$(".navtest-b-l2-list__findabankaccount li>a");
this.TipsAndToolsOnSV = $$(".navtest-b-l2-list__tipstools li>a");
this.AcctTasksOnSV = $$(".site-L2__account-tasks li>a");
this.ParagUnderSV = $(".site-header__marketing-tile-content-box");





this.VerifyDropdowns = function(dropdownText){
    this.Dropdowns.count().then(count=>{
        for(let i = 0; i < count; i++){
            expect(this.Dropdowns.get(i).isDisplayed()).toBe(true);
            expect(this.Dropdowns.get(i).getText()).toEqual(dropdownText[i]);
        }
    })
}

this.VerifyTitle = function(link, element, title){
    link.click();
    browser.wait(EC.visibilityOf(element), 12000).then(()=>{
        expect(browser.getTitle()).toEqual(title);
    })
    }

    this.navigateToCCLink = function(link, element, title){
      link.count().then(count=>{
    for(let i = 0; i < count; i++){
      link.get(i).click();
      browser.wait(EC.presenceOf(element), 12000).then(()=>{
          expect(browser.getTitle()).toEqual(title[i]);
            browser.navigate().back();
          this.Dropdowns.get(0).sendKeys(protractor.Key.ENTER);
      })
      }
    })
    }

    this.navigateToSVLink = function(link, element, title){
        link.count().then(count=>{
            for(let i = 0; i < count; i++){
              link.get(i).click();
              browser.wait(EC.presenceOf(element), 12000).then(()=>{
                  expect(browser.getTitle()).toEqual(title[i]);
                    browser.navigate().back();
                  this.Dropdowns.get(1).sendKeys(protractor.Key.ENTER);
              })
              }
            })
    }
}
module.exports = new HomePage();