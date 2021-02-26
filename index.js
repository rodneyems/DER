require('dotenv').config()
const axios = require('axios');
const RENAVAM = process.env.RENAVAM
const fs = require('fs')

const headers = {
    'Host': 'www.multas1.der.sp.gov.br',
    'Content-Length': '400',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'Origin': 'http://www.multas1.der.sp.gov.br',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Referer': 'http://www.multas1.der.sp.gov.br/der_multas_web/pages/DER_Multas_Web/index.aspx',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'Connection': 'close',
    'Cookie': 'ASP.NET_SessionId=repjeen41wdio4d1hfxholad'
};

const dataString = `__LASTFOCUS=&__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwULLTEwMjEwNjUzOTJkZJ97F%2BrtvO%2FSkQn6UX6jcqRk4gKnsam%2BfJJUASvazoA7&__EVENTVALIDATION=%2FwEdAAX%2BIWUgFZtwJJK45edVHRbxYg7PtP78B3hMqgrZ83vtJ1RcAzIs7SKuq4SZjkma1nbtlP5KZf71UgAdV48LN%2FlDHOOSBV0ntJJ9k125tstyyL%2Fod9H%2BXKu%2BasFIYX2j96XelwcO4J47VJLvHMo7QCCZ&IN_EMUL_RENAVAM=${RENAVAM}&IN_CNPJ=&IN_CNPJ_CADIN=&EPortalSubmitButton1=Enviar`;

axios({
    method: 'POST',
    url: 'http://www.multas1.der.sp.gov.br/der_multas_web/pages/DER_Multas_Web/index.aspx',
    headers: headers,
    data: dataString
})
    .then(res => {
        const data = res.data.slice(res.data.indexOf('<table '),res.data.indexOf('<p class="oculta">'))
        fs.writeFileSync('./teste.html', data)
    })
    .catch(err => console.log(err))
