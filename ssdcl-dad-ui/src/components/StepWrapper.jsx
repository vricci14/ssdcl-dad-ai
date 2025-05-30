import { useState } from 'react';
import QuestionInput from './QuestionInput';
import { getNextQuestions } from '../utils/getNextQuestions';

export default function StepWrapper() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(() => getNextQuestions({})[0]);

  const handleNext = (value) => {
    setAnswers((prev) => {
      const updated = { ...prev, [currentQuestion.key]: value };
      const next = getNextQuestions(updated);
      setCurrentQuestion(next[0]);
      return updated;
    });
  };

  if (!currentQuestion) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(answers, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <QuestionInput question={currentQuestion} onNext={handleNext} />
    </div>
  );
}
