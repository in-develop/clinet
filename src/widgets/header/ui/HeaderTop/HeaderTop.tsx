import clsx from "clsx";

import { urbanist } from "@/shared/lib/fonts";
import { ROUTING } from "@/shared/lib/rounting";
import { AppLink } from "@/shared/ui/Button";

const HeaderTop = () => (
  <div
    className={clsx(
      urbanist.className,
      "bg-violet py-2 text-center text-sm font-semibold text-white",
    )}
  >
    <AppLink href={ROUTING.shippingPayment} className="border-b">
      Shipping & Payment
    </AppLink>
  </div>
);

export { HeaderTop };
