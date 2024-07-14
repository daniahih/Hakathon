import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWords } from "../redux/thunk/wordsThunk";
import { getAllLetters } from "../redux/thunk/lettersThunk";

const Test = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words);
  const letters = useSelector((state) => state.letters);

  useEffect(() => {
    dispatch(getAllWords());
    dispatch(getAllLetters());
  }, [dispatch]);

  return (
    <div>
      {words.data?.map((word) => (
        <div key={word.id} style={{ marginBottom: "1rem" }}>
          <div>
            <strong>Arabic:</strong> {word.Ar}
          </div>
          <div>
            <strong>Hebrew:</strong> {word.He}
          </div>
          <div>
            <strong>Arabic (English Transliteration):</strong> {word.ArEn}
          </div>
          <div>
            <strong>Hebrew (English Transliteration):</strong> {word.HeEn}
          </div>
        </div>
      ))}
      {letters.data?.map((letter) => (
        <div key={letter.id} style={{ marginBottom: "1rem" }}>
          <div>
            <strong>Arabic:</strong> {letter.Ar}
          </div>
          <div>
            <strong>Hebrew:</strong> {letter.He}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;