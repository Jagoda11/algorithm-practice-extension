import { Problem, UserProgress } from './types'
import { isUniqueProblem } from './problems/isUnique'
import { checkPermuteProblem } from './problems/checkPermute'
import { urlifyProblem } from './problems/urlify'
import { palindromePermutationProblem } from './problems/palindromePermutation'
import { oneWayProblem } from './problems/oneWay'
import { stringCompressionProblem } from './problems/stringCompression'
import { rotateMatrixProblem } from './problems/rotateMatrix'
import { zeroMatrixProblem } from './problems/zeroMatrix'
import { stringRotationProblem } from './problems/stringRotation'
import { removeDuplicatesProblem } from './problems/removeDuplicates'
import { returnKthToLastProblem } from './problems/returnKthToLast'
import { deleteMiddleNodeProblem } from './problems/deleteMiddleNode'
import { partitionProblem } from './problems/partition'
import { sumListsProblem } from './problems/sumLists'
import { checkPalindromeListProblem } from './problems/checkPalindromeList'
import { intersectionProblem } from './problems/intersection'
import { loopDetectionProblem } from './problems/loopDetection'
import { threeInOneProblem } from './problems/threeInOne'
import { stackMinProblem } from './problems/stackMin'
import { stackOfPlatesProblem } from './problems/stackOfPlates'
import { queueViaStacksProblem } from './problems/queueViaStacks'
import { sortStackProblem } from './problems/sortStack'
import { animalShelterProblem } from './problems/animalShelter'
import { routeBetweenNodesProblem } from './problems/routeBetweenNodes'
import { listOfDepthsProblem } from './problems/listOfDepths'
import { checkBalancedProblem } from './problems/checkBalanced'
import { validateBSTProblem } from './problems/validateBST'
import { successorProblem } from './problems/successor'
import { buildOrderProblem } from './problems/buildOrder'
import { firstCommonAncestorProblem } from './problems/firstCommonAncestor'
import { bstSequencesProblem } from './problems/bstSequences'
import { checkSubtreeProblem } from './problems/checkSubtree'
import { randomNodeProblem } from './problems/randomNode'
import { pathsWithSumProblem } from './problems/pathsWithSum'
import { bitInsertionProblem } from './problems/bitInsertion'
import { binaryToStringProblem } from './problems/binaryToString'
import { flipBitToWinProblem } from './problems/flipBitToWin'
import { nextNumberProblem } from './problems/nextNumber'
import { debuggerProblem } from './problems/debugger'
import { conversionProblem } from './problems/conversion'
import { pairwiseSwapProblem } from './problems/pairwiseSwap'
import { drawLineProblem } from './problems/drawLine'
import { heavyPillProblem } from './problems/heavyPill'
import { basketballProblem } from './problems/basketball'
import { dominosProblem } from './problems/dominos'
import { antsOnTriangleProblem } from './problems/antsOnTriangle'
import { jugsOfWaterProblem } from './problems/jugsOfWater'
import { blueEyedIslandProblem } from './problems/blueEyedIsland'
import { apocalypseProblem } from './problems/apocalypse'
import { eggDropProblem } from './problems/eggDrop'
import { lockersProblem } from './problems/lockers'
import { poisonProblem } from './problems/poison'
import { callCenterProblem } from './problems/callCenter'
import { deckOfCardsProblem } from './problems/deckOfCards'
import { jukeboxProblem } from './problems/jukebox'
import { parkingLotProblem } from './problems/parkingLot'
import { onlineBookReaderProblem } from './problems/onlineBookReader'
import { jigsawProblem } from './problems/jigsaw'
import { minesweeperProblem } from './problems/minesweeper'

const STORAGE_KEY = 'userProgress'

// Define the problems array
const problems: Problem[] = [
  isUniqueProblem,
  parkingLotProblem,
  onlineBookReaderProblem,
  jigsawProblem,
  callCenterProblem,
  deckOfCardsProblem,
  jukeboxProblem,
  checkPermuteProblem,
  urlifyProblem,
  palindromePermutationProblem,
  oneWayProblem,
  stringCompressionProblem,
  rotateMatrixProblem,
  zeroMatrixProblem,
  stringRotationProblem,
  removeDuplicatesProblem,
  returnKthToLastProblem,
  deleteMiddleNodeProblem,
  partitionProblem,
  sumListsProblem,
  checkPalindromeListProblem,
  intersectionProblem,
  loopDetectionProblem,
  threeInOneProblem,
  stackMinProblem,
  stackOfPlatesProblem,
  queueViaStacksProblem,
  sortStackProblem,
  animalShelterProblem,
  routeBetweenNodesProblem,
  listOfDepthsProblem,
  checkBalancedProblem,
  validateBSTProblem,
  successorProblem,
  buildOrderProblem,
  firstCommonAncestorProblem,
  bstSequencesProblem,
  checkSubtreeProblem,
  randomNodeProblem,
  pathsWithSumProblem,
  bitInsertionProblem,
  binaryToStringProblem,
  flipBitToWinProblem,
  nextNumberProblem,
  debuggerProblem,
  conversionProblem,
  pairwiseSwapProblem,
  drawLineProblem,
  heavyPillProblem,
  basketballProblem,
  dominosProblem,
  antsOnTriangleProblem,
  jugsOfWaterProblem,
  blueEyedIslandProblem,
  apocalypseProblem,
  eggDropProblem,
  lockersProblem,
  poisonProblem,
  minesweeperProblem,
]

export const initializeProgress = (): UserProgress => {
  localStorage.removeItem('userProgress')
  const activeProblems = problems.map((problem) => ({
    ...problem,
    box: 1,
  }))

  console.log('🐰🐰🐰Active Problems:', activeProblems, '🐰🐰🐰') // Log active problems

  const queue = problems.slice(6)

  console.log('🐋🐋🐋Queue:', queue, '🐋🐋🐋🐋')

  const boxes = [
    { id: 1, problems: activeProblems, reviewInterval: 1 },
    { id: 2, problems: [], reviewInterval: 2 },
    { id: 3, problems: [], reviewInterval: 4 },
    { id: 4, problems: [], reviewInterval: 8 },
    { id: 5, problems: [], reviewInterval: 16 },
    { id: 6, problems: [], reviewInterval: 32 },
  ]

  console.log('👻👻Boxes after initialization:', boxes, '👻👻') // Detailed log

  const lastReviewed = boxes.reduce(
    (acc, box) => {
      acc[box.id] = new Date(0) // default to epoch time
      return acc
    },
    {} as { [key: number]: Date },
  )

  const userProgress: UserProgress = {
    activeProblems: boxes,
    queue,
    lastReviewed,
    version: 1,
  }
  console.log('🥹🥹🥹🥹🥹Initialized User Progress:', userProgress, '🥹🥹🥹🥹') // Detailed log
  // Log initialization

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress))
  return userProgress
}

export const getUserProgress = (): UserProgress | null => {
  const data = localStorage.getItem(STORAGE_KEY)
  const progress = data ? JSON.parse(data) : null
  console.log('🐼🐼🐼Loaded User Progress:', progress, '🐼🐼🐼') // Log loaded progress
  return progress
}

export const saveUserProgress = (userProgress: UserProgress): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress))
}

export const moveProblemToBox = (
  problem: Problem,
  targetBoxId: number,
  userProgress: UserProgress,
): void => {
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
}
