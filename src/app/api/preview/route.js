import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const id = searchParams.get('id'); // WordPress Database ID

  // 1. Verify the secret matches your environment variable
  if (secret !== process.env.WP_PREVIEW_SECRET || !id) {
    return new Response('Invalid preview token or missing ID', { status: 401 });
  }

  // 2. Enable Draft Mode (sets a secure cookie)
  const draft = await draftMode();
  draft.enable();

  // 3. Redirect to a dynamic preview route
  // We use the ID because drafts in WordPress don't always have a final public slug yet
  redirect(`/blog/preview/${id}`);
}
