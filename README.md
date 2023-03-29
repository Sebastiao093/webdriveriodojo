# webdriveriodojo
Web Driver IO Dojo
Dojo de Web Driver IO de Globant 


https://webdriver.io/docs/autocompletion/


Crear el archivo  jsconfig.json    para que me cargue y autocomplete las librerias como browser

{
    "compilerOptions": {
        "types": [
            "node",
            "@wdio/globals/types",
            "@wdio/mocha-framework"
        ]
    }
}


Para correr el archivo wdio y hacer la prueba

npm run wdio
npm run wdio ./wdio.conf.js




await browser.pause(10000)
si quieren verlo abrir puede utilizar esta funcion
https://webdriver.io/docs/api/browser/pause/



https://webdriver.io/docs/dot-reporter/
logLevel: 'warn'




https://www.tutorialselenium.com/2018/12/12/css-selectores-en-selenium-webdriver/
https://devhints.io/xpath



todos los elementos se pueden identificar con css selector, a menos de que se quiera encontrar un texto, se usa el xpath

juego
https://flukeout.github.io

https://webdriver.io/docs/selectors/