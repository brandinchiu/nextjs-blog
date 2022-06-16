/**
 *
 * @param request
 * @param response
 */
export default function handler(request, response) {
  response.status(200).json({ text: 'Hello Next.js' });
}
