import { TFooterLink } from "./types";

import { ROUTING } from "@/shared/lib/rounting";

export const shopLinks: TFooterLink[] = [
  { label: "Le Pelerin Perfume", href: "#" },
  { label: "Piel Cosmetics Line", href: "#" },
  { label: "Surgene Line", href: "#" },
  { label: "Skincare", href: "#" },
  { label: "By Skin Type", href: "#" },
  { label: "Men's Cosmetics", href: "#" },
  { label: "Body Care", href: "#" },
  { label: "Hair Care", href: "#" },
  { label: "Professional Skincare", href: "#" },
  { label: "Gifts and Packaging", href: "#" },
];

export const pagesLinks: TFooterLink[] = [
  { label: "Cosmetologist", href: ROUTING.cosmetologist },
  { label: "About us", href: ROUTING.aboutUs },
  { label: "Cooperation", href: ROUTING.cooperation },
  { label: "Delivery & Payments", href: ROUTING.deliveryPayments },
  { label: "FAQ", href: ROUTING.faq },
  { label: "Blog", href: ROUTING.blog },
  { label: "Account", href: ROUTING.account },
  { label: "Contact", href: ROUTING.contact },
];

export const infoLinks: TFooterLink[] = [
  { label: "Privacy policy", href: ROUTING.privacy },
  { label: "Returns and refunds", href: ROUTING.refunds },
  { label: "Shipping policy", href: ROUTING.shippingPolicy },
  { label: "Terms & Conditions", href: ROUTING.terms },
];

export const socialLinks: TFooterLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export const CONTACT_EMAIL = "adv@pielcosmetics.com";
