import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Problem, UserProgress } from './types'
import {
  getUserProgress,
  initializeProgress,
  saveUserProgress,
  moveProblemToBox,
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
      localStorage.setItem('userProgress', JSON.stringify(userProgress)) // Save new progress
    }

    setProgress(userProgress)
    loadProblems(userProgress)
  }, [])

  const loadProblems = (userProgress: UserProgress) => {
    try {
      console.log('🙈 User Progress in loadProblems:', userProgress)

      userProgress.activeProblems.forEach((box) => {
        console.log(
          `🐢 Box ID: ${box.id}, Review Interval: ${box.reviewInterval}, Problems:`,
          JSON.stringify(box.problems, null, 2),
        )
      })

      const dueProblems = userProgress.activeProblems.flatMap(
        (box) => box.problems,
      )

      console.log('🐧 Loaded Problems:', JSON.stringify(dueProblems, null, 2))

      setProblems(dueProblems)
    } catch (error) {
      console.error('Error loading problems:', error)
    }
  }

  const handleToggleSolution = (id: number) => {
    setShowSolution((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMoveProblem = (problem: Problem, targetBoxId: number) => {
    if (progress) {
      moveProblemToBox(problem, targetBoxId, progress)
      saveUserProgress(progress)

      setProgress({ ...progress })
      loadProblems(progress)
      setProblems([...progress.activeProblems.flatMap((box) => box.problems)])
    }
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
