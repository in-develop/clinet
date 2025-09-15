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
  shop: "/shop",
  faq: "/faq",
  cooperation: "/cooperation",
  deliveryPayments: "/delivery-payments",
  blog: "/blog",
  account: "/account",
  privacy: "/privacy",
  refunds: "/refunds",
  terms: "/terms",
  shippingPolicy: "/shipping-policy",
  test: (testName: string) => `/test/${testName}`,
  blogPost: (id: string) => `/blog/${id}`,
  catalog: (category: string, subCategory?: string) =>
    subCategory ? `/catalog/${category}${subCategory}` : `/catalog/${category}`,
};

export { ROUTING };
