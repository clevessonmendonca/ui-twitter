import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

const tweets = [
  `Acabei de migrar um projeto React GIGANTE de create-react-app para
  Vite e os resultados foram:
  ✅ npm start: De 32s para 400ms (sim, demorava 30s)
  ✅ npm build: De 120s para 22s Além disso, troquei do
  Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥`,
  "Second Tweet",
  "Thirt Tweet",
];

export const Timeline = () => {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form action="" className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/clevessonmendonca.png"
            alt="Clevesson Mendonça"
          />
          <textarea
            name=""
            id="tweet"
            placeholder="What's happening?"
          ></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet, i) => {
        return <Tweet key={i} content={tweet} />;
      })}
    </main>
  );
};
