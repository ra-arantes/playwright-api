import { expect, test } from "@playwright/test";

test("Get Booking - GetBookingIds", async ({ request }) => {
  //faz uma requisição GET para a API de booking
  const response = await request.get("/booking");
  //printa a resposta da requisição no console
  console.log(await response.json());
  //verifica se a resposta foi ok e se o status é 200
  expect(response.ok()).toBeTruthy();
  //verifica se o status da resposta é 200
  expect(response.status()).toBe(200);
 })

test('booking/:id - GetBookingById -validar dados dos campos', async ({ request }) => {
  //faz uma requisição GET para a API de booking usando o id 1
  const response = await request.get("/booking/94");
  //transforma a resposta da requisição em um objeto JSON 
  const jsonBody = await response.json(); 
  //printa a resposta da requisição no console
  console.log(jsonBody);
  //verifica se os dados da resposta são iguais aos esperados
  expect(jsonBody.firstname).toBe("Jane");
  expect(jsonBody.lastname).toBe("Doe");
  expect(jsonBody.totalprice).toBe(111);
  expect(jsonBody.depositpaid).toBe(true);
  expect(jsonBody.bookingdates.checkin).toBe("2018-01-01");
  expect(jsonBody.bookingdates.checkout).toBe("2019-01-01");
  expect(jsonBody.additionalneeds).toBe("Extra pillows please");

  //verifica se a resposta foi ok e se o status é 200
  expect(response.ok()).toBeTruthy();
  //verifica se o status da resposta é 200
  expect(response.status()).toBe(200);
})

test('booking/:id - GetBookingById -validar campos apresentados', async ({ request }) => {  
 //faz uma requisição GET para a API de booking usando o id 1
  const response = await request.get("/booking/94");
  //printa a resposta da requisição no console
  const jsonBody = await response.json(); 
  //printa a resposta da requisição no console
  console.log(jsonBody);
  //verifica se os campos são apresentados e preenchidos corretamente
  expect(jsonBody).toHaveProperty('firstname');
  expect(jsonBody.firstname.trim()).not.toBe('');
  expect(jsonBody).toHaveProperty('lastname');
  expect(jsonBody.lastname.trim()).not.toBe('');
  expect(jsonBody).toHaveProperty('totalprice');
  expect(jsonBody.totalprice).toBeGreaterThan(0);
  expect(jsonBody).toHaveProperty('depositpaid');
  expect(jsonBody.depositpaid).toBe(true);
  expect(jsonBody).toHaveProperty('bookingdates');
  expect(jsonBody.bookingdates).toHaveProperty('checkin');
  expect(jsonBody.bookingdates).toHaveProperty('checkout');
  expect(jsonBody).toHaveProperty('additionalneeds'); 
  expect(jsonBody.additionalneeds.trim()).not.toBe('');
  
  //verifica se a resposta foi ok e se o status é 200
  expect(response.ok()).toBeTruthy();
  //verifica se o status da resposta é 200
  expect(response.status()).toBe(200);
})