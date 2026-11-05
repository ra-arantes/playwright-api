import { expect, test } from "../fixtures/test.js";

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

