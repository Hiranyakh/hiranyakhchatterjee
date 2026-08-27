/**
 * Central configuration for the reusable registration funnel.
 * Change these values instead of rewriting the landing/registration logic.
 */
export type EventType = "one_to_one" | "webinar";

export const eventConfig = {
  eventType: "one_to_one" as EventType,
  eventName: "AI-Powered Side Hustle Masterclass",
  paymentRequired: false,
  registrationOpen: true,

  // Used only for webinar mode.
  eventDate: "",
  eventTime: "",
  timezone: "Asia/Kolkata",

  // Used only for one-to-one mode.
  calBookingUrl: "https://cal.com/hiranyak-chatterjee-iajpeu/masterclass",

  // Optional future payment configuration.
  paymentAmountInPaise: 5900,
  currency: "INR",
};

export function isRegistrationOpen() {
  return eventConfig.registrationOpen;
}

export function usesScheduler() {
  return eventConfig.eventType === "one_to_one";
}
