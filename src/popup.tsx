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

    const dueProblems = userProgress.activeProblems.flatMap(
      (box) => box.problems,
    )
    console.log('🐧🐧🐧Loaded Problems:', dueProblems, '🐧🐧') // Log loaded problems

    setProblems(dueProblems)
  }

  const handleToggleSolution = (id: number) => {
    setShowSolution((prev) => ({ ...prev, [id]: !prev[id] }))
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
