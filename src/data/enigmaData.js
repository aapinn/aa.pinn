const encode = (str) => btoa(str.toLowerCase())
const decode = (str) => atob(str)

export const clues = [
  {
    id: 1,
    category: "\u{1F522}",
    categoryName: "Math",
    question: "Number of Arif's skills with level \u2265 80%, multiplied by the number of services he offers, minus the number of retail companies he has worked for. What is the result?",
    answer: encode("26"),
    hint: "Check the About page (skill bars) & services data. Skills \u2265 80%: 5, Services: 6, Companies: 4.",
    location: "Enigma Page"
  },
  {
    id: 2,
    category: "\u{1F50D}",
    categoryName: "Observation",
    question: "Among all of Arif's skills, find the one with the lowest percentage. What is that number?",
    answer: encode("55"),
    hint: "Look at the Skill Bars section on the About page. Find the smallest percentage.",
    location: "About Page"
  },
  {
    id: 3,
    category: "\u{1F9E9}",
    categoryName: "Riddle",
    question: "I am a four-legged animal, I like to eat mice, and I say 'meow'. Who am I? Count the number of letters in my English name.",
    answer: encode("6"),
    hint: "Look for a hidden clue in the About page source code.",
    location: "About Page (source code)"
  },
  {
    id: 4,
    category: "\u{1F30D}",
    categoryName: "Knowledge",
    question: "At the bottom of the Blog page, there's a quote from Arif. Count the number of words in that quote. How many?",
    answer: encode("12"),
    hint: "Quote: 'Kode yang kamu tulis hari ini adalah pondasi untuk masa depanmu.' (12 words)",
    location: "Blog Page"
  },
  {
    id: 5,
    category: "\u{1F4DC}",
    categoryName: "Logic",
    question: "Number of Arif's goals/aspirations (on the Roadmap page) plus the number of completed milestones (marked with a check). What is the result?",
    answer: encode("10"),
    hint: "Goals: 4, Completed milestones: 6.",
    location: "Roadmap Page"
  },
  {
    id: 6,
    category: "\u{1F50D}",
    categoryName: "Observation",
    question: "On the Contact page, how many social media links are displayed?",
    answer: encode("4"),
    hint: "Check the Social Media section on the right side of the Contact page.",
    location: "Contact Page"
  },
  {
    id: 7,
    category: "\u{1F9E0}",
    categoryName: "Logic",
    question: "On the Dashboard page, how many stat cards (Repositories, Stars, Forks, etc.) are in the GitHub Stats section?",
    answer: encode("5"),
    hint: "Look at the GitHub Stats Grid — there are 5 stat cards.",
    location: "Dashboard Page"
  }
]

export const checkAnswer = (clueId, userAnswer) => {
  const clue = clues.find(c => c.id === clueId)
  if (!clue) return false
  return userAnswer.toLowerCase().trim() === decode(clue.answer)
}
