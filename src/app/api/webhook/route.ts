import { Payment, MercadoPagoConfig } from 'mercadopago';

export async function POST(req: Request) {
  const client = new MercadoPagoConfig({
    accessToken: 'TEST-2540608626419579-031511-49e8e52b4c0bbaf273759e49b3c7e66e-1729753630',
    options: {
      timeout: 5000,
      idempotencyKey: 'abc',
    },
  });

  const payment = new Payment(client);

  const url = new URL(req.url);

  url.searchParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  try {
    if (url.searchParams.get('type') === 'payment') {
      const data = await payment.get({ id: url.searchParams.get('data.id') || '', requestOptions: {} });

      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }

  console.log('end');

  return Response.json({ result: 'ok' });
}
