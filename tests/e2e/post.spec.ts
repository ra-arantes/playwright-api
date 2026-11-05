import { expect, test } from "../fixtures/test.js";


test("Post Booking - CreateBooking -cadastro de reserva", async ({ request }) => {  
    //faz uma requisição POST para a API de booking com os dados da reserva
    const response = await request.post("/booking", {
        data: {
            "firstname": "Jinny",
            "lastname": "Does",  
            "totalprice": 305,  
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-11-05",
                "checkout": "2026-11-25"
            },
            "additionalneeds": "Breakfast"
        }
    }); 
    
    console.log(await response.json());
    //verifica se a resposta foi ok e se o status é 200
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    //verifica se os dados da resposta são iguais aos esperados
    expect(responseBody.booking.firstname).toBe("Jinny");
    expect(responseBody.booking.lastname).toBe("Does");
    expect(responseBody.booking.totalprice).toBe(305);
    expect(responseBody.booking.depositpaid).toBe(true);
    expect(responseBody.booking.bookingdates.checkin).toBe("2026-11-05");
    expect(responseBody.booking.bookingdates.checkout).toBe("2026-11-25");
    expect(responseBody.booking.additionalneeds).toBe("Breakfast");     
})


test("Post auth -gerar token @regressivo", async ({ request }) => { 
    //faz uma requisição POST para a API gerar token com os dados do usuário
    const response = await request.post("/auth", {
        data: {
    "username" : "admin",
    "password" : "password123"  
        }
    }); 
    console.log(await response.json());     
    //verifica se a resposta foi ok e se o status é 200
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //recebe a resposta da requisição e transforma em um objeto JSON
    const responseBody = await response.json(); 
    //verifica se o token foi gerado e se não é nulo
    expect(responseBody.token).not.toBeNull();
    console.log("Token gerado: " + responseBody.token);  
})




