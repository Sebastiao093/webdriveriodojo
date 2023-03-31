/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    
    async open() {
        await browser.url('http://uitestingplayground.com/shadowdom');
    }

}
