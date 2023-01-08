import { GetServerSideProps } from 'next';
import type { Blog, Tag } from '../../types/blog';
import { client } from '../../libs/client';
import Image from 'next/image'
import { useLocale } from '../../hooks/useLocale';
import Head from 'next/head';

type Props = {
  blog: Blog;
  tag: Tag;
};

export default function Blog({ blog, tag }: Props) {
  const { t } = useLocale()
  const blogDetailTitle = `${blog.title} - ${t.NAME}`
  return (
    <>
      <Head>
        <title>{blogDetailTitle}</title>
      </Head>
      <div>
        <div className="px-10 py-20 mx-auto">
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="object-cover w-full shadow-sm h-full">
                <Image src={blog.image.url} alt={blog.title} width={blog.image.width} height={blog.image.height} />
            </div>
            <div className="mt-2">
              <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">
                {blog.title}
              </div>
            </div>
            <div className="flex items-center justify-start mt-4 mb-4">
              {blog.tags.map(tag => (
                <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg" key={tag.id}>
                  #{tag.tag}
                </div>
              ))}
            </div>
            <div className="mt-2">
              <div
                dangerouslySetInnerHTML={{__html: `${blog.body}`}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blog',
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};
