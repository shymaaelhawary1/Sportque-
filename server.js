import express from 'express'; 
import cors from 'cors'; 
import stripe from 'stripe'; 

const app = express();
const stripeInstance = stripe('sk_test_51QZABAFfw4QTxSIWY3aa5zPdpEDFDTXyQYCaWfcFj9CwNbN37QpBGqkEV4sDO0kt8FEM0MyTZqKKvg5E6CluNhyf00FoUnO6W9'); // مفتاح Stripe السري

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, 
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: 'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(5003, () => {
  console.log('Server running on http://localhost:5003');
});
