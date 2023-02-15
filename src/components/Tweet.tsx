import { ArrowsClockwise, CheckCircle, Heart } from "phosphor-react";
import "./Tweet.css";

interface TweetProps {
  content: string;
}

export const Tweet = ({ content }: TweetProps) => {
  return (
    <a href="#" className="tweet">
      <img
        src="https://github.com/clevessonmendonca.png"
        alt="Clevesson Mendonça"
      />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Clevesson Mendonça</strong>
          <span>@cl_.png</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <CheckCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
};
