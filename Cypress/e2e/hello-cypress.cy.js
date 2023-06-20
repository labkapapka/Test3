
let tranid = Date.now();  
// pm.environment.set("tranid", tranid); 

it('Ordertype 6', () => {
    cy.request({
        method: 'POST',
        url: 'https://paylink02.taslink.com.ua',
        body: {
            "type": "getSession",
            "merchant": "000000020000001",
            "tranid": "2023-06-19T10:16:18.353Z",
            "ordertype": "6",
            "description": "п2п перевод",
            "callback": "https://www.google.com.ua/",
            "amount": "101",
            "fee": "0",
            "clientParams": {
            "cardHolderName": "Mr.Cardholder",
            "billAddrCity": "Kyiv",
            "billAddrCountry": "804",
            "billAddrLine3": "",
            "billAddrLine2": "",
            "billAddrLine1": "test",
            "billAddrPostCode": "03201",
            "billAddrState": "18",
            "billMobilePhone": "380501112233",
            "billEmail": "test@gmail.com"
            }
        }
    })
})

