import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

const answers = ["Concordo", "Faz sentido!", "Fogo em"];

import "./Status.css";

export const Status = () => {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    `Acabei de migrar um projeto React GIGANTE de create-react-app para
    Vite e os resultados foram:
    ✅ npm start: De 32s para 400ms (sim, demorava 30s)
    ✅ npm build: De 120s para 22s Além disso, troquei do
    Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥`,
    "Second Tweet",
    "Thirt Tweet",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum animi laboriosam, eveniet omnis expedita voluptates molestiae in, sapiente, ipsam vero quae ab voluptatum corporis sit. Consequatur laborum ipsam odit delectus." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/clevessonmendonca.png"
            alt="Clevesson Mendonça"
          />
          <textarea
            id="tweet"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswer(event.target.value)}
            placeholder="Tweet your answer"
          ></textarea>
        </label>

        <button type="submit">
          <PaperPlaneRight /> 
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer, i) => {
        return <Tweet key={i} content={answer} />;
      })}
    </main>
  );
};
