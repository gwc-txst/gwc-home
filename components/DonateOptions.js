/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from "next/router";
import { TIERS } from "../constants/constant";

export default function DonateOptions({ setLoading }) {
  const router = useRouter();
  const { status } = router.query;
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);

  const createCheckOutSession = async (tier) => {
    setLoading(true);
    const checkoutItem = { ...tier };
    delete checkoutItem.description;
    delete checkoutItem.includedFeatures;
    checkoutItem.image =
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
    checkoutItem.quantity = 1;
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      item: checkoutItem,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };
  return (
    <div className="bg-gwc-blue-light">
      {status && status === "success" && (
        <div className="bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700">
          Payment Successful
        </div>
      )}
      {status && status === "cancel" && (
        <div className="bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700">
          Payment Unsuccessful
        </div>
      )}
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-7xl font-extrabold text-gray-900 sm:text-center">
            Donate Today
          </h1>

          {/* <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Texas State is a Hispanic Serving Institution, meaning a large part
            of our 60% female-identifying population are minorities.
            Additionally, about half our students are first-generation, which
            means they are navigating their educational journey independently.
          </p> */}
          <p className="mt-5 text-xl text-gray-700 sm:text-center">
            Every dollar goes directly to our students. Food, prizes for
            competitions, workshop materials, event materials
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.price}
                  </span>
                </p>

                <button
                  onClick={() => {
                    createCheckOutSession(tier);
                  }}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Donate
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What&apos;s included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
