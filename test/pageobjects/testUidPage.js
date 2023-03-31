import { default as Page } from "./Page.js";
import { Key } from 'webdriverio'


class TestUidPage extends Page {

    guidActualValue;
    copyUid;
    
    get guidGenerator() { return $('div guid-generator');}
    get configUidBtn() { return this.guidGenerator.shadow$('#buttonGenerate');}
    get copybtn() {return this.guidGenerator.shadow$('#buttonCopy');}
    get inputGenerator() {return this.guidGenerator.shadow$('#editField');} 
   

    async generateUid(){
        await this.configUidBtn.click();
        await this.copybtn.click();
        this.guidActualValue = this.inputGenerator.getValue();
        console.log(await this.inputGenerator.getValue());
        await this.inputGenerator.clearValue();
        await this.inputGenerator.click();
        await browser.keys([Key.Ctrl, 'v']);
        this.copyUid = this.inputGenerator.getValue();
        console.log(await this.guidActualValue + ' actual');
        console.log(await this.copyUid + ' copiado');
    }

    async openPage() {
        await super.open();
    }

}

export default new TestUidPage();