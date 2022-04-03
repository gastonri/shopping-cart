# Interview - Cart

A cart is critical to any application. It’s imperative that we have a cart that is stable, but incredibly flexible. For such a common interface, architecture design can easily range vastly, allowing us to easily gauge the skill level and experience of a potential engineer. Because there is often a lot of boilerplate when building a new application, we've gone ahead and set up a base layer that includes [routing](https://github.com/yankaindustries/interview-cart/blob/main/src/App.js) and some basic [components](https://github.com/yankaindustries/interview-cart/tree/main/src/components) to make use of. Feel free to modify any aspect of this base layer. It is simply designed to give you a head start, but if at any point decisions that have already been made don't make sense for how you want to structure the applicaiton, please change it.

## Requirements

This project is not designed to trick you in any way, but to analyze _how you design an application_ to build flexible features.

The following requirements help frame the area of focus:

### Functional Requirements
- The cart is a multi-step flow, one screen per step
  - Product Selection
  - Registration (name, address)
  - Payment info (credit card)
  - Order confirmation
- User _must_ be able to traverse back and forth between the steps until finally reaching confirmation

**Nice to have:**
- User _could_ refresh and maintain state

### Technical Requirements

- All data is persisted via API
  - We have stubbed these [requests](https://github.com/yankaindustries/interview-cart/blob/main/src/api.js)

### Out of Scope
- Server architecture
- Authentication implementation
- 3rd-party payments, PayPal / ApplePay

## Get Started

To begin, please fork the repo so that you'll have access to write to it. When you are ready to submit it, you can simply create a Pull Request that we can review.

This app was built using Create React App. Once you've cloned the app locally, run `yarn install && yarn start` to get it running.
