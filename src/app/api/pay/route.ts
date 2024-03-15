import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST() {
  const client = new MercadoPagoConfig({
    accessToken: 'TEST-2540608626419579-031511-49e8e52b4c0bbaf273759e49b3c7e66e-1729753630',
    options: {
      timeout: 5000,
      idempotencyKey: 'abc',
    },
  });

  const preference = new Preference(client);

  const result = await preference.create({
    body: {
      items: [
        {
          title: 'Mi item',
          quantity: 1,
          currency_id: 'PEN',
          id: '1234',
          unit_price: 75.76,
          category_id: 'art',
          description: 'Descripción del ítem',
          picture_url: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        },
      ],
      back_urls: {
        success: 'http://localhost:3001/success',
        failure: 'http://localhost:3001/success/?failure=true',
        pending: 'http://localhost:3001/success/?pending=true',
      },
      notification_url: 'https://626c-45-230-251-19.ngrok-free.app/api/webhook',
    },
  });

  console.log(result);

  return Response.json({ result: 'ok' });
}
