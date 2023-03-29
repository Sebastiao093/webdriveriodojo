describe('Test Web Page Shadow DOM', ()=> {

    it('click to generate guid and copy to clipboard', async ()=>{
        await browser.url('http://uitestingplayground.com/shadowdom')
        console.log(await browser.getUrl());

        await expect(browser).toHaveTitleContaining('Shadow DOM');
        const guidGenerator = $('div guid-generator');

        const configUidBtn = await guidGenerator.shadow$('#buttonGenerate');
        await configUidBtn.click();

        const copybtn = await guidGenerator.shadow$('#buttonCopy');
        await copybtn.click();

        const inputGenerator = guidGenerator.shadow$('#editField');
        console.log(await inputGenerator.getValue());
        const clipBoard = await browser.getClipboard;

        inputGenerator == clipBoard ? console.log('Es igual') : console.log('No es igual');
            
        /* console.log(await configUidBtn.getValue()); */

        browser.pause(5000)
    });

})