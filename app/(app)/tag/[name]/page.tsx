import { Feed } from '@/src/components/Feed';
import { CONTENT } from '@/src/constants';
import { Database } from '@/src/types/supabase';
import { type ApiParameters } from '@/src/utils/fetching/apiParameters';
import { getBookmarks } from '@/src/utils/fetching/bookmarks';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';
type Props = {
  params: { name: string };
  searchParams: Partial<ApiParameters>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Tag: #${decodeURIComponent(params.name)}`,
  };
}

export default async function TagPage({ params, searchParams }: Props) {
  const { limit, offset } = searchParams;
  const supabaseClient = createServerComponentClient<Database>({ cookies });
  const tag = decodeURIComponent(params.name);
  const { data, count } = await getBookmarks({
    supabaseClient,
    params: { ...searchParams, tag },
  });
  return (
    <Feed
      items={data}
      count={count || 0}
      limit={limit}
      offset={offset}
      allowGroupByDate={true}
      title={`#${tag}`}
      // icon={<ListBullets />}
      feedType="bookmarks"
    />
  );
}
