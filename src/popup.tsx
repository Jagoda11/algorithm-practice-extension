import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Problem, UserProgress } from './types'
import {
  getUserProgress,
  initializeProgress,
  saveUserProgress,
} from './storage'

const App = () => {
  const [problems, setProblems] = useState<Problem[]>([])
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>(
    {},
  )
  const [progress, setProgress] = useState<UserProgress | null>(null)

  useEffect(() => {
    let userProgress = getUserProgress()
    if (!userProgress) {
      userProgress = initializeProgress()
    }
    setProgress(userProgress)
    loadProblems(userProgress)
  }, [])

  const loadProblems = (userProgress: UserProgress) => {
    console.log('🙈🙈🙈User Progress in loadProblems:', userProgress, '🙈🙈🙈') // Detailed log

    userProgress.activeProblems.forEach((box) => {
      console.log(
        '🐯🐯🐯🐯',
        `Box ID: ${box.id}, Review Interval: ${box.reviewInterval}, Problems:`,
        box.problems,
        '🐯🐯🐯🐯',
      )
    })

    const dueProblems = userProgress.activeProblems.flatMap(
      (box) => box.problems,
    )
    console.log('🐧🐧🐧Loaded Problems:', dueProblems, '🐧🐧') // Log loaded problems

    setProblems(dueProblems)
  }

  const handleToggleSolution = (id: number) => {
    setShowSolution((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const moveProblemToBox = (
    problem: Problem,
    targetBoxId: number,
    userProgress: UserProgress,
  ) => {
    // Remove the problem from its current box
    userProgress.activeProblems.forEach((box) => {
      box.problems = box.problems.filter((p) => p.id !== problem.id)
    })

    // Update the box property and add the problem to the target box
    problem.box = targetBoxId
    const targetBox = userProgress.activeProblems.find(
      (box) => box.id === targetBoxId,
    )
    if (targetBox) {
      targetBox.problems.push(problem)
    }

    // Save the updated user progress
    saveUserProgress(userProgress)
    setProgress(userProgress)
    loadProblems(userProgress)
  }

  return (
    <div>
      <h1>
        Algorithm Practice <i className="fas fa-code"></i>
      </h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <h2>
              {problem.title} <i className="fas fa-question-circle"></i>
            </h2>
            <p>{problem.description}</p>
            <button onClick={() => handleToggleSolution(problem.id)}>
              {showSolution[problem.id] ? 'Hide Solution' : 'Show Solution'}{' '}
              <i
                className={
                  showSolution[problem.id] ? 'fas fa-eye-slash' : 'fas fa-eye'
                }
              ></i>
            </button>
            {showSolution[problem.id] && (
              <div>
                <h3>
                  Solution <i className="fas fa-lightbulb"></i>:
                </h3>
                <pre>{problem.solution}</pre>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
