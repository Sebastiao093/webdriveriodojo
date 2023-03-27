describe('cc', ()=> {
    it('test description', async ()=>{
        await browser.url('http://uitestingplayground.com/shadowdom')
        console.log(await browser.getUrl());
        browser.pause(5000)
    })
})