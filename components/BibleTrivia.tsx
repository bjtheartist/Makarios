import React, { useState } from 'react';
import { useTriviaBooks } from '../lib/useContent';
import { TRIVIA_QUESTIONS } from '../constants';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface BibleTriviaProps {
  onBack: () => void;
}

export const BibleTrivia: React.FC<BibleTriviaProps> = ({ onBack }) => {
  const { data: triviaBooks, loading } = useTriviaBooks();
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Filter questions for the selected book
  const questions = TRIVIA_QUESTIONS.filter(q => q.bookId === selectedBook);
  const currentQuestion = questions[currentQuestionIndex];

  const handleBookSelect = (bookId: string) => {
    setSelectedBook(bookId);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Quiz finished for this book
      setSelectedBook(null);
    }
  };

  if (selectedBook && currentQuestion) {
    return (
      <div className="pb-24 pt-8 px-6 bg-onyx min-h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8">
            <button 
                onClick={() => setSelectedBook(null)}
                className="p-2 -ml-2 hover:bg-gray-800 rounded-full text-white"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="font-serif text-2xl font-light text-white tracking-wide">
                Question {currentQuestionIndex + 1}/{questions.length}
            </h1>
        </div>

        <div className="flex-1 flex flex-col justify-center">
            <div className="bg-charcoal border border-gray-800 rounded-3xl p-8 mb-8 shadow-2xl">
                <p className="text-xl text-white font-light leading-relaxed text-center">
                    {currentQuestion.question}
                </p>
            </div>

            <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => {
                    let btnStyle = "bg-black border-gray-800 text-gray-300";
                    if (isAnswered) {
                        if (idx === currentQuestion.correctAnswer) {
                            btnStyle = "bg-green-900/30 border-green-500 text-white";
                        } else if (idx === selectedAnswer) {
                            btnStyle = "bg-red-900/30 border-red-500 text-white";
                        } else {
                            btnStyle = "bg-black border-gray-800 opacity-50";
                        }
                    } else if (selectedAnswer === idx) {
                        btnStyle = "bg-gray-800 border-white text-white";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleAnswerSelect(idx)}
                            disabled={isAnswered}
                            className={`w-full p-5 rounded-2xl border flex items-center justify-between transition-all ${btnStyle}`}
                        >
                            <span className="font-light">{option}</span>
                            {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle size={20} className="text-green-500" />}
                            {isAnswered && idx === selectedAnswer && idx !== currentQuestion.correctAnswer && <XCircle size={20} className="text-red-500" />}
                        </button>
                    )
                })}
            </div>
        </div>

        {isAnswered && (
            <div className="mt-8">
                <Button fullWidth onClick={handleNext} variant="primary">
                    {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
            </div>
        )}
      </div>
    );
  }

  // Book Selection View
  return (
    <div className="pb-24 pt-8 px-6 bg-onyx min-h-full">
        <div className="flex items-center gap-4 mb-8">
            <button 
                onClick={onBack}
                className="p-2 -ml-2 hover:bg-gray-800 rounded-full text-white"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="font-light text-3xl text-white tracking-wide">Bible Trivia</h1>
        </div>
      
      <p className="text-gray-400 mb-8 font-light">Test your knowledge. Select a book to begin.</p>
      
      <div className="grid grid-cols-2 gap-4">
        {triviaBooks.map((book) => (
            <button 
                key={book.id}
                onClick={() => handleBookSelect(book.id)}
                className="bg-black p-6 rounded-[2rem] border border-gray-800 flex items-center justify-center text-center hover:border-white/20 hover:bg-gray-900 transition-all"
            >
                <span className="text-white font-light tracking-widest uppercase text-sm">{book.name}</span>
            </button>
        ))}
      </div>
    </div>
  );
};