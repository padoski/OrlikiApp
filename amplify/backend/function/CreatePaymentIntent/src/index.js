
const stripe = require('stripe')('sk_test_51JIwX6Hjsr9d6oSatusqPIm5LOPzOy9bAJvh7YAlDA2R5h97afVNcmV7lPRUvL3sbVNzbAo6HcY1HdkHPHXwrOHE00OKC5kG8K')

exports.handler = async (event) => {
    const {typeName,arguments} =event;

    if(typeName !== "Mutation")
    {
        throw new Error('Request is not a mutation');

    }
    if(!arguments?.amount)
    {
        throw new Error('Amount is required');
    }

    //create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount:arguments.amount,
        currency:'pln'
    });

    return{
        clientSecret: paymentIntent.client_secret,
    }
};
