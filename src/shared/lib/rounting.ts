const ROUTING = {
  home: "/",
  shippingPayment: "/shipping-payment",
  cosmetologist: "/cosmetologist",
  aboutUs: "/about-us",
  contact: "/contact",
  signIn: "/sign-in",
  bestsellers: "/bestsellers",
  promotions: "/promotions",
  skincareGuide: "/skincare-guide",
  cart: "/cart",
  faq: "/faq",
  shop: "/shop",
  test: (testName: string) => `/test/${testName}`,
};

export { ROUTING };
