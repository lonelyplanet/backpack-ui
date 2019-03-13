const prepareDataLayer = () => {
  /**
   * Makes sure data layer array is set at "window.lp.analytics".
   * Will use any preexisting parts thereof instead of wiping them out.
   */
  const path = ["lp", "analytics", "dataLayer"];
  path.reduce((acc, key, i) => {
    const isLastIteration = i === path.length - 1;
    return acc[key] || (acc[key] = isLastIteration ? [] : {});
  }, window);
};

export const dataLayerPush = event => {
  if (typeof window === "undefined") return;

  prepareDataLayer();

  for (const dl of [window.lp.analytics.dataLayer, window.dataLayer]) {
    /**
     * in rizzo-based codebases, lp.analytics.dataLayer is an object;
     * push to window.dataLayer (if possible) instead.
     */
    if (Array.isArray(dl)) {
      dl.push(event);
      break;
    }
  }
};

export const createPromotionClickEvent = promotion => ({
  /**
   * Brought over from `lp-analytics`' `src/events/eventCreators.ts` to save
   * bundle space.
   */
  event: "promotion-click",
  ecommerce: {
    promoClick: {
      promotions: [promotion],
    },
  },
});
