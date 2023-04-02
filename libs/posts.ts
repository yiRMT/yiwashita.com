import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post, PostMetadata } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map((fileName) => {
    if (fileName !== '.DS_Store') {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    }
  });
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    if (fileName !== '.DS_Store') {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      const { data, content } = matter(fileContents);

      const postMetadata: PostMetadata = {
        id: id,
        title: data.title,
        image: data.image,
        date: data.date,
        tags: data.tags,
      }

      // Combine the data with the id
      return postMetadata
    }
  });
  
  // Sort posts by date
  return allPostsData.sort((postA, postB) => {
    const a = postA!.date;
    const b = postB!.date;
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}



export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString();

  const postData: Post = {
    id: id,
    meta: {
      id: id,
      title: data.title,
      image: data.image,
      date: data.date,
      tags: data.tags,
    },
    body: contentHtml,
  }

  // Combine the data with the id
  return postData;
}