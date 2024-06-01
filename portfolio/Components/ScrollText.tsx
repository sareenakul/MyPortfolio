import React from 'react';
import "./scroll.scss";

type Props = {
  words: string[];
  st: string;
}

const ScrollText: React.FC<Props> = ({ words , st }) => {
  return (
    <div className="content">
      <div className="content__container">
        <p className="content__container__text">{st}</p>
        <ul className="content__container__list">
            <div className=' flow-root flex-start text-[#F7AB0A]'>
                {words.map((word, index) => (
                    <li key={index} className="content__container__list__item">
                        {word}
                    </li>
                ))}
            </div>
        </ul>
      </div>
    </div>
  );
}

export default ScrollText;
