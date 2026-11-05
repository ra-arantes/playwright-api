import { expect, test } from "../fixtures/test.js";

test("Patch booking/:id - UpdateBooking -atualizando dados da reserva com token", async ({ request }) => {
    const authResponse = await request.post("/auth", {
        data: {
            username: "admin",
            password: "password123"
        }
    });
    expect(authResponse.ok()).toBeTruthy();
    expect(authResponse.status()).toBe(200);
    const authResponseBody = await authResponse.json();
    const tokenRecebido = authResponseBody.token;
    expect(tokenRecebido).toBeTruthy();

    //faz uma requisição PATCH para a API de booking usando o id 1 e o token gerado
    const partialUpdateRequest = await request.patch("/booking/198", {
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Cookie': `token=${tokenRecebido}`
        },
        data: {
            "firstname": "Rafaa",    
            "lastname": "Rafinha",
            "totalprice": 500
        }
    });
    // Lê o corpo uma única vez
    console.log(await partialUpdateRequest.json());

     // Valida o status da resposta
    expect(partialUpdateRequest.status()).toBe(200);
    expect(partialUpdateRequest.ok()).toBeTruthy();

    // Valida os dados atualizados
    const partialUpdateRequestBody = await partialUpdateRequest.json();
    expect(partialUpdateRequestBody.firstname).toBe("Rafaa");
    expect(partialUpdateRequestBody.lastname).toBe("Rafinha");
    expect(partialUpdateRequestBody.totalprice).toBe(500);
});