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
            row: getRandomInt(setting.rowNum.value - 1),
            column: getRandomInt(setting.columnNum.value - 1)
        }
    }
    const _initGame = () => {
        gameStatus.score.value = 0
        gameStatus.isGaming.value = true
        gameStatus.markedTarget.value = _generateMarkedTarget()
    }
    const _endGame = () => {
        gameStatus.isGaming.value = false
        gameStatus.markedTarget.value = null
    }
    const game = () => {
        const gameTime = 5000
        _initGame()
        setTimeout(() => {
            _endGame()
        }, gameTime)
    }
    const isMarkedTarget = (row, column) => {
        if (gameStatus.markedTarget.value) {
            return row === gameStatus.markedTarget.value.row && column === gameStatus.markedTarget.value.column
        } else {
            return false
        }
    }
    const hit = (row, column) => {
        if (isMarkedTarget(row, column)) {
            gameStatus.score.value++
            gameStatus.markedTarget.value = _generateMarkedTarget()
        }
    }

    return { gameStatus, game, hit, isMarkedTarget }
}

export default useGameStatus