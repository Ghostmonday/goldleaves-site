import React, { useEffect, useRef } from "react";
import { Collapsible, CollapsibleContent } from "./ui/collapsible";
import { usePricing } from "../context/PricingContext";
import PricingThree from "./PricingThree";

export default function PricingReveal() {
  const { open } = usePricing();
  const ref = useRef(null);

  useEffect(() => {
    if (open && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [open]);

  return (
    <section id="pricing-block" className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Collapsible open={open}>
          <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div ref={ref} className="transition-opacity duration-300 data-[state=open]:opacity-100 data-[state=closed]:opacity-0">
              <PricingThree />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}