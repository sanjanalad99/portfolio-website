"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";


if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}
// Initialize the Resend client with the API key from the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ladsanjana99@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
