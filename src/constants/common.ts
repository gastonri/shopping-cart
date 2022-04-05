export const SUPPORTED_LANGUAGES: string[] = ['en'];
export const DEFAULT_LANGUAGE: string = 'en';

export const storage = {
  cartStore: 'CartStore',
  personalInfo: 'PersonalInfo',
  paymentData: 'PaymentData',
};

export const creditCardsRegex = [
  /^(?:4[0-9]{12}(?:[0-9]{3})?)$/, //visaRegEx
  /^(?:5[1-5][0-9]{14})$/, //mastercardRegEx
  /^(?:3[47][0-9]{13})$/, // amexpRegEx
  /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/, // discovRegEx
];

export const keySteps = {
  registration: 'registration',
  payment: 'payment',
  orderConfirmation: 'orderConfirmation',
};
