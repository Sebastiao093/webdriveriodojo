import { Key } from 'webdriverio'

describe('Test Web Page Shadow DOM', ()=> {

    it('click to generate guid and copy to clipboard', async ()=>{
        await browser.url('http://uitestingplayground.com/shadowdom')
        console.log(await browser.getUrl());

        await expect(browser).toHaveTitleContaining('Shadow DOM');
        const guidGenerator = $('div guid-generator');

        const configUidBtn = await guidGenerator.shadow$('#buttonGenerate');
        console.log(await configUidBtn.waitForClickable());
        await expect(configUidBtn).toBeClickable();
        await configUidBtn.click();

        const copybtn = await guidGenerator.shadow$('#buttonCopy');
        console.log(await copybtn.waitForClickable());
        await expect(copybtn).toBeClickable();
        await copybtn.click();

        /* await guidGenerator.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Ctrl, 'c']); */
        //Usando el copy del browser si da el valor esperado que se copia (o sea descomentando estas lineas), pero el copy del clipboard no esta funcionando
        // y pega lo anterior que este copiado en ese computador
       
        const inputGenerator = await guidGenerator.shadow$('#editField');
        const guidActualValue = await inputGenerator.getValue();
        console.log(await inputGenerator.getValue());
        

        await inputGenerator.clearValue();

        await inputGenerator.click();
        await browser.keys([Key.Ctrl, 'v']);
        const copyUid = await inputGenerator.getValue();

        console.log(guidActualValue + ' actual');
        console.log(copyUid + ' copiado');

        await expect(copyUid).toEqual(guidActualValue);
        
        browser.pause(5000)
    });

})