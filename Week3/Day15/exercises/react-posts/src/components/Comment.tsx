import React from "react";
import UserInfo from "./UserInfo";

export interface CommentsType
{
    date: string;
    text: string;
    author: { name: string, avatarUrl: string };
}
export interface CommentsProps
{
    data: CommentsType;
}

export default function Comment({ data }: CommentsProps) {
  return (
    <div>
      <div className="comment">
        <UserInfo name={data.author.name} url={data.author.avatarUrl} />

        <div className="comment-text">{data.text}</div>

        <div className="comment-date">{data.date}</div>
      </div>
    </div>
  );
}


/* export const Comment = (props: CommentsProps) => {
    const { data } = props;
    return (
        <div>

            <div className="comment">
                <div className="user">
                    <img
                        className="user-image"
                        src={data.author.avatarUrl}
                        alt={data.author.name}
                    />
                    <div className="user-name">{data.author.name}</div>
                </div>

                <div className="comment-text">{data.text}</div>

                <div className="comment-date">{data.date}</div>
            </div>

         </div>
    );
} */
 