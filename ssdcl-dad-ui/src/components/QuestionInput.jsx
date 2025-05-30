import { useState } from 'react';

export default function QuestionInput({ question, onNext }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onNext(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-lg font-medium text-gray-700">{question.label}</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        autoFocus
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Next
      </button>
    </form>
  );
}
