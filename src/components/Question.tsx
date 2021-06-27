import { ReactNode } from 'react';
import cx from 'classnames';

import '../styles/question.scss'

type QuestionsProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighLighted?: boolean;
}

export function Question({
    content,
    author,
    isAnswered = false,
    isHighLighted = false,
    children,
}: QuestionsProps) {
    return (
        <div className={cx('question', {answered: isAnswered}, {highLighted: isHighLighted},)}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar}
                    alt={author.name}/>
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    );
}