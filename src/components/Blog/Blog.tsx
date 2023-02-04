import React from 'react';
import css from './Blog.module.scss';
import type { BlogData } from '../../pages/BlogPage/BlogPage';

const Blog = (
  props: Pick<
    BlogData,
    'title' | 'content' | 'reply' | 'thumbnailImgUrl' | 'createdAt'
  >
) => {
  const { title, content, reply, thumbnailImgUrl, createdAt } = props;
  const date = new Date(createdAt);
  console.log(title);
  const postingDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
  return (
    <div className={css.blogContainner}>
      <section className={css.contents}>
        <div className={css.contentWrapper}>
          <p className={css.writeDate}>{postingDate}</p>
          <div className={css.titleWrapper}>
            <h3 className={css.contentTitle}>{title}</h3>

            <p className={css.reply}>({reply})</p>
          </div>
          <p
            className={css.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <img className={css.contentImg} src={thumbnailImgUrl} alt="BlogImg" />
      </section>
    </div>
  );
};

export default Blog;
