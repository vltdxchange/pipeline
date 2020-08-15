const { browser } = require("protractor")

var login=function()
{
    this.openurl=function()
    {
        browser.get("https://www.amazon.in/")
    }
}

module.exports=new login;