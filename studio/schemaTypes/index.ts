import dailyVerse from './dailyVerse'
import videoCourse from './videoCourse'
import testimony from './testimony'
import prayerCategory from './prayerCategory'
import prayer from './prayer'
import triviaBook from './triviaBook'
import triviaQuestion from './triviaQuestion'
import lesson from './lesson'

export const schemaTypes = [
  // Core content
  dailyVerse,
  videoCourse,
  lesson,
  testimony,

  // Prayers
  prayerCategory,
  prayer,

  // Trivia
  triviaBook,
  triviaQuestion,
]
