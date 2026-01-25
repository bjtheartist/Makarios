import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '6w7ytxw4',
  dataset: 'production',
  apiVersion: '2026-01-22',
  useCdn: true,
});
