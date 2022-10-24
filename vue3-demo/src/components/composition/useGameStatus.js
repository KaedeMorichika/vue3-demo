import {ref} from "vue";
import {getRandomInt} from "@/utils/utils.js";

const useGameStatus = (setting) => {
    const gameStatus = {
        score: ref(0),
        isGaming: ref(false),
        markedTarget: ref(null)
    }
    const _generateMarkedTarget = () => {
        return {
            row: getRandomInt(setting.rowNum - 1),
            column: getRandomInt(setting.columnNum - 1)
        }
    }
    const _initGame = () => {
        gameStatus.score = 0
        gameStatus.isGaming = true
        gameStatus.markedTarget = _generateMarkedTarget()
    }
    const _endGame = () => {
        gameStatus.isGaming = false
        gameStatus.markedTarget = null
    }
    const game = () => {
        const gameTime = 5000
        _initGame()
        setTimeout(() => {
            _endGame()
        }, gameTime)
    }
    const isMarkedTarget = (row, column) => {
        if (gameStatus.markedTarget) {
            return row === gameStatus.markedTarget.row && column === gameStatus.markedTarget.column
        } else {
            return false
        }
    }
    const hit = (row, column) => {
        if (isMarkedTarget(row, column)) {
            gameStatus.score++
            gameStatus.markedTarget = _generateMarkedTarget()
        }
    }

    return { gameStatus, game, hit, isMarkedTarget }
}

export default useGameStatus