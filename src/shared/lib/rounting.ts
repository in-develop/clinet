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
  test: (testName: string) => `/test/${testName}`,
  blogPost: (id: string) => `/blog/${id}`,
};

export { ROUTING };
