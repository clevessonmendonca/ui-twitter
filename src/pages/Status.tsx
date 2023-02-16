import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

const answers = ["Concordo", "Faz sentido!", "Fogo em"];

import './Status.css'

export const Status = () => {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum animi laboriosam, eveniet omnis expedita voluptates molestiae in, sapiente, ipsam vero quae ab voluptatum corporis sit. Consequatur laborum ipsam odit delectus." />

      <Separator />

      <form action="" className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/clevessonmendonca.png"
            alt="Clevesson Mendonça"
          />
          <textarea
            name=""
            id="tweet"
            placeholder="Tweet your answer"
          ></textarea>
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer, i) => {
        return <Tweet key={i} content={answer} />;
      })}
    </main>
  );
};
