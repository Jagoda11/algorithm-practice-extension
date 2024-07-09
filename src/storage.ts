import { Problem, UserProgress } from './types'
import { isUniqueProblem } from './problems/isUnique'
import { checkPermuteProblem } from './problems/checkPermute'
import { urlifyProblem } from './problems/urlify'
import { palindromePermutationProblem } from './problems/palindromePermutation'
import { oneWayProblem } from './problems/oneWay'
import { stringCompressionProblem } from './problems/stringCompression'

const STORAGE_KEY = 'userProgress'

// Define the problems array
const problems: Problem[] = [
  isUniqueProblem,
  checkPermuteProblem,
  urlifyProblem,
  palindromePermutationProblem,
  oneWayProblem,
  stringCompressionProblem,
]

export const initializeProgress = (): UserProgress => {
  const activeProblems = problems.slice(0, 6).map((problem) => ({
    ...problem,
    box: 1,
  }))

  console.log('Active Problems:', activeProblems) // Log active problems

  const queue = problems.slice(6)

  console.log('Queue:', queue)

  const boxes = [
    { id: 1, problems: activeProblems, reviewInterval: 1 },
    { id: 2, problems: [], reviewInterval: 2 },
    { id: 3, problems: [], reviewInterval: 4 },
    { id: 4, problems: [], reviewInterval: 8 },
    { id: 5, problems: [], reviewInterval: 16 },
    { id: 6, problems: [], reviewInterval: 32 },
  ]

  const lastReviewed = boxes.reduce(
    (acc, box) => {
      acc[box.id] = new Date(0) // default to epoch time
      return acc
    },
    {} as { [key: number]: Date },
  )

  const userProgress = {
    activeProblems: boxes,
    queue,
    lastReviewed,
    version: 1,
  }
  console.log('Initializing Progress:', userProgress) // Log initialization

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress))
  return userProgress
}

export const getUserProgress = (): UserProgress | null => {
  const data = localStorage.getItem(STORAGE_KEY)
  const progress = data ? JSON.parse(data) : null
  console.log('Loaded User Progress:', progress) // Log loaded progress
  return progress
}

export const saveUserProgress = (userProgress: UserProgress): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress))
}