var Base = require('../Utilities/Base.js');
var CustomLocators = require('../Utilities/customLocators.js');
var HomePage = require('../POM/HomePage.page.js');
var HomePageData = require('../TestData/HomePageData.json');
var EC = protractor.ExpectedConditions;


describe('Capital One Bank Header menu on Home page', () => {
    
describe('Verify the header dropdowns of the Home page', () => {
    beforeAll(()=>{
        browser.waitForAngularEnabled(false);
        Base.navigateTo(Base.Homepage);
    })
  it('should display the CapitalOne logo', () => {
      browser.wait(EC.visibilityOf(HomePage.CapitalOneLogo), 12000).then(()=>{
      expect(HomePage.CapitalOneLogo.isDisplayed()).toBe(true);
      });
  });
  
  it('should navigate to the Home Page when CapitalOne logo is clicked', ()=>{
      HomePage.VerifyTitle(HomePage.CapitalOneLogo, HomePage.elementOnHomePage, HomePageData.titles[0].homePage);
  });

  it('should display the Dropdowns on the header menu ', () => {
      HomePage.VerifyDropdowns(HomePageData.dropdowns);
  });

  describe('Verify the contents under the Credit Cards dropdown', () => {
  it('should display links under the Credit Cards dropdown', () => {
      HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER);
      Base.DropdownMultiLinks(HomePage.TitlesOnCCDropdown, HomePageData.titleUnderCCDropdown);
      Base.DropdownMultiLinks(HomePage.FeaturedCCList, HomePageData.featuredLinkTexts);
     
      Base.DropdownMultiLinks(HomePage.FindCCLists, HomePageData.findCCLinks);
      Base.DropdownMultiLinks(HomePage.TipsAndToolsList, HomePageData.tipAndToolsTexts);
      Base.DropdownMultiLinks(HomePage.AccountTasks, HomePageData.accountTasksTexts);
      if(expect(HomePage.SimplifyAccount.isDisplayed()).toBe(true)){
      expect(HomePage.SimplifyAccount.getText()).toEqual(HomePageData.simplifyAcctTexts[0]);
      expect(HomePage.ParagUnderCC.getText()).toEqual(HomePageData.paragUnderCC[0]);
      }
  });
 
   it('should verify titles of the links under the Credit Card dropdown', () => {
    HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER);  
    HomePage.navigateToCCLink(HomePage.FeaturedCCList, HomePage.elementOnFindCC, HomePageData.featuredLinkTitles);
    Base.DropdownSingleLink(HomePage.QualifiedButton, HomePageData.elementOnAcctTasks, HomePageData.titles[1].qualified);
    HomePage.navigateToCCLink(HomePage.FindCCLists, HomePage.elementOnFindCC, HomePageData.findCCTitles);

    HomePage.TipsAndToolsList.get(0).click();
    browser.sleep(2000);
    browser.getAllWindowHandles().then(handles=>{
        browser.switchTo().window(handles[1]);
        browser.wait(EC.visibilityOf(HomePage.elementOnCreditwise), 12000).then(()=>{
            expect(browser.getCurrentUrl()).toEqual(HomePageData.creditWiseUrl);
            browser.close();
            browser.switchTo().window(handles[0]);
        })
    })
    HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER); 
    HomePage.TipsAndToolsList.count().then(count=>{
        for(let i = 1; i < count; i++){
            HomePage.TipsAndToolsList.get(i).click();
            browser.wait(EC.visibilityOf(HomePage.elementOnTipTools), 12000).then(()=>{
                expect(browser.getTitle()).toEqual(HomePageData.tipAndToolsTitles[i-1]);
                HomePage.CapitalOneLogo.click();
                HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER);  
            })
        }
    })
  HomePage.AccountTasks.get(0).click();
  browser.wait(EC.visibilityOf($(".page-heading.ng-scope")), 12000).then(()=>{
      expect(browser.getTitle()).toEqual(HomePageData.acctTasksTitles[0]);
      HomePage.CapitalOneOnAcctTask.click();
      browser.wait(EC.visibilityOf(HomePage.elementOnHomePage), 12000).then(()=>{
      HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER); 
      })
  })
  HomePage.AccountTasks.get(1).click();
  browser.wait(EC.visibilityOf(HomePage.elementOnAcctTasks), 12000).then(()=>{
      expect(browser.getTitle()).toEqual(HomePageData.acctTasksTitles[1]);
      HomePage.CapitalOneLogo.click();
      HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER); 
  })
  HomePage.AccountTasks.get(2).click();
  browser.wait(EC.visibilityOf(HomePage.elementOnAcctTasks), 12000).then(()=>{
      expect(browser.getTitle()).toEqual(HomePageData.acctTasksTitles[2]);
      HomePage.CapitalOneLogo.click();
      HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER); 
  })
  HomePage.AccountTasks.get(3).click();
  browser.wait(EC.visibilityOf($("#id-signin-username-label")), 12000).then(()=>{
      expect(browser.getTitle()).toEqual(HomePageData.acctTasksTitles[3]);
      HomePage.CapitalOneOnAcctTask.click();
      HomePage.Dropdowns.get(0).sendKeys(protractor.Key.ENTER); 
  })
  HomePage.VerifyTitle(HomePage.SimplifyAccount, HomePage.elementOnTipTools, HomePageData.titles[2].simplify);   
   });
});


fdescribe('Verify contents under the Checking & Saving dropdown', () => {
        
   it('should display links under the Checking & Saving dropdown', () => {
       HomePage.Dropdowns.get(1).sendKeys(protractor.Key.ENTER);
      Base.DropdownMultiLinks(HomePage.TitlesOnSCDropdown, HomePageData.titleUnderSVDropdown);
      Base.DropdownMultiLinks(HomePage.SaveList, HomePageData.savingLinks);
      Base.DropdownMultiLinks(HomePage.CheckList, HomePageData.checkingLinks);
      Base.DropdownMultiLinks(HomePage.FindBankSV, HomePageData.findBankAcctLinks);
      Base.DropdownMultiLinks(HomePage.TipsAndToolsOnSV, HomePageData.SVTipTools);
      Base.DropdownMultiLinks(HomePage.AcctTasksOnSV, HomePageData.acctTasksOnSV);
      expect(HomePage.ParagUnderSV.getText()).toEqual(HomePageData.paragUnderSV);
   });

  fit('should navigate to the links under the Checking & Saving dropdown', () => {
    //  HomePage.navigateToSVLink(HomePage.SaveList, HomePage.elementOnTipTools, HomePageData.savingLinkTitles);
    //  HomePage.navigateToSVLink(HomePage.CheckList, HomePage.elementOnTipTools, HomePageData.checkingLinkTitles);
    //  Base.DropdownSingleLink(HomePage.CompareButton, HomePage.elementOnTipTools, HomePageData.titles[3].compareButtonTitle);
     HomePage.Dropdowns.get(1).sendKeys(protractor.Key.ENTER);
     HomePage.FindBankSV.get(0).click();
     browser.wait(EC.visibilityOf(HomePage.elementOnPersonalLink), 12000).then(()=>{
         expect(browser.getTitle()).toEqual(HomePageData.findBankSVTitles[0]);
         browser.navigate().back();
         HomePage.Dropdowns.get(1).sendKeys(protractor.Key.ENTER);
     });
     HomePage.FindBankSV.count().then(count=>{
         for(let i =1; i < count; i++){
             HomePage.FindBankSV.get(i).click();
             browser.wait(EC.visibilityOf(HomePage.elementOnTipTools), 12000).then(()=>{
                 expect(browser.getTitle()).toEqual(HomePageData.findBankSVTitles[i]);
                 browser.navigate().back();
                 HomePage.Dropdowns.get(1).sendKeys(protractor.Key.ENTER);
             })
         }
     });

     HomePage.navigateToSVLink(HomePage.TipsAndToolsOnSV, HomePage.elementOnTipTools, HomePageData.SVTipToolsTitles);
  });
});

});





});