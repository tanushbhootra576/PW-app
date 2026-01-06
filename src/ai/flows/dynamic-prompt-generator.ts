'use server';

/**
 * @fileOverview This file defines a Genkit flow for dynamically generating engaging discount-related prompts.
 *
 * - generateDiscountPrompt - A function that generates a discount prompt.
 * - DiscountPromptInput - The input type for the generateDiscountPrompt function.
 * - DiscountPromptOutput - The return type for the generateDiscountPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiscountPromptInputSchema = z.object({
  productName: z.string().describe('The name of the PW product or batch.'),
  discountPercentage: z.number().describe('The discount percentage available.'),
  couponCode: z.string().describe('The coupon code to use.'),
  validity: z.string().describe('The validity period of the coupon code.'),
});

export type DiscountPromptInput = z.infer<typeof DiscountPromptInputSchema>;

const DiscountPromptOutputSchema = z.object({
  prompt: z.string().describe('The generated discount prompt.'),
});

export type DiscountPromptOutput = z.infer<typeof DiscountPromptOutputSchema>;

export async function generateDiscountPrompt(input: DiscountPromptInput): Promise<DiscountPromptOutput> {
  return generateDiscountPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'discountPrompt',
  input: {schema: DiscountPromptInputSchema},
  output: {schema: DiscountPromptOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in Physics Wallah (PW) products.
  Your goal is to generate an engaging and persuasive discount prompt to encourage users to purchase PW products using a coupon code.
  Use the following information to create the prompt:

  Product Name: {{{productName}}}
  Discount Percentage: {{{discountPercentage}}}%
  Coupon Code: {{{couponCode}}}
  Validity: {{{validity}}}

  The prompt should be concise, attention-grabbing, and highlight the benefits of using the coupon code.
  It should also create a sense of urgency and encourage immediate action.
  The tone should be professional yet enthusiastic, reflecting the PW brand.
  Focus on how the discount helps students achieve their academic goals.
  Make sure to include the coupon code and validity date in the prompt.
  The generated prompt should be no more than 2 sentences long.
  Example Prompt: "Unlock {{{discountPercentage}}}% off {{{productName}}} with code {{{couponCode}}}! Valid until {{{validity}}}. Don't miss this chance to ace your exams!"
  `,
});

const generateDiscountPromptFlow = ai.defineFlow(
  {
    name: 'generateDiscountPromptFlow',
    inputSchema: DiscountPromptInputSchema,
    outputSchema: DiscountPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
