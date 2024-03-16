import { Payment, MercadoPagoConfig } from 'mercadopago';

export async function POST(req: Request) {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS as string,
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
