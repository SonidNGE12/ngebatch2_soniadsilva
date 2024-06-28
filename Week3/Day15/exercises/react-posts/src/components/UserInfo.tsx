import React from 'react'

export interface userInfoProps
{
    name: string;
    url: string;

}
    
export default function UserInfo({name,url}: userInfoProps) {
  return (
<div className="user">
<img className="user-image" src={url} alt={name} />
<div className="user-name">{name}</div>
</div>
  );
}

/* export default function UserInfo(props: userInfoProps) {
    const data = {props}
    return 
    <div className="comment">
                <div className="user">
                    <img
                        className="user-image"
                        src={data.author.url}
                        alt={data.author.name}
                    />
                    <div className="user-name">{data.author.name}</div>
        </div>
    </div>
        </div >
}
 */