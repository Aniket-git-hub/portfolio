<template>
	<article class="bg-light-card dark:bg-dark-card border-4 border-light-border dark:border-dark-border shadow-brutal-lg p-4 md:p-6 w-full max-w-md relative game-card-attention z-10">
		<!-- Attention-grabbing badge -->
		<div v-if="!gameStarted" class="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-light-accent-2 dark:bg-dark-accent-2 text-light-bg dark:text-dark-bg border-4 border-light-border dark:border-dark-border shadow-brutal px-2 py-1 md:px-3 md:py-1 font-black text-xs animate-bounce-brutal">
			🎮 PLAY ME!
		</div>
		
		<div class="mb-4">
			<div class="flex justify-between items-center mb-2">
				<div class="flex items-center gap-2">
					<h3 class="text-lg md:text-xl font-black text-light-text dark:text-dark-text">Tic-Tac-Toe</h3>
					<Icon name="mdi:gamepad-variant" class="text-light-accent dark:text-dark-accent animate-pulse" size="18px" />
				</div>
				<button
					v-if="gameStarted"
					@click="resetGame"
					class="bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg px-3 py-2 md:px-4 md:py-2 border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold text-xs md:text-sm touch-manipulation"
				>
					Reset
				</button>
			</div>
			<p v-if="!gameStarted" class="text-xs text-light-text-secondary dark:text-dark-text-secondary font-semibold">
				Challenge my AI! Built with minimax algorithm 🧠
			</p>
		</div>
		
		<!-- Difficulty Selection -->
		<div v-if="!gameStarted" class="mb-4">
			<p class="text-xs md:text-sm font-bold text-light-text dark:text-dark-text mb-3 flex items-center gap-2">
				<Icon name="mdi:robot" class="text-light-accent dark:text-dark-accent" size="16px" />
				Select Difficulty:
			</p>
			<div class="flex gap-2 flex-wrap">
				<button
					v-for="diff in difficulties"
					:key="diff.value"
					@click="startGame(diff.value)"
					class="px-3 py-2 md:px-4 md:py-2 border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold text-xs md:text-sm animate-fade-in touch-manipulation min-h-[44px]"
					:style="{ animationDelay: `${difficulties.indexOf(diff) * 0.1}s` }"
					:class="diff.value === difficulty ? 'bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg' : 'bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text'"
				>
					{{ diff.label }}
					<span v-if="diff.value === 'hard'" class="ml-1">🔥</span>
				</button>
			</div>
		</div>
		
		<!-- Game Status -->
		<div v-if="gameStarted" class="mb-4 text-center">
			<p class="text-sm font-bold text-light-text dark:text-dark-text">
				<span v-if="winner">{{ winner === 'X' ? 'You Win!' : winner === 'O' ? 'AI Wins!' : "It's a Draw!" }}</span>
				<span v-else>{{ currentPlayer === 'X' ? 'Your Turn' : 'AI Thinking...' }}</span>
			</p>
		</div>
		
		<!-- Game Board -->
		<div class="grid grid-cols-3 gap-2 md:gap-2 mb-4" v-if="gameStarted">
			<button
				v-for="(cell, index) in board"
				:key="index"
				@click="makeMove(index)"
				:disabled="cell !== '' || winner || currentPlayer === 'O'"
				class="aspect-square bg-light-surface dark:bg-dark-surface border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-black text-2xl md:text-3xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-brutal touch-manipulation min-h-[60px] md:min-h-[80px]"
				:class="{
					'text-light-accent dark:text-dark-accent': cell === 'X',
					'text-light-accent-2 dark:text-dark-accent-2': cell === 'O',
					'text-light-text-secondary dark:text-dark-text-secondary': cell === ''
				}"
			>
				{{ cell || '' }}
			</button>
		</div>
		
		<!-- Game Info -->
		<div v-if="gameStarted" class="text-xs text-light-text-secondary dark:text-dark-text-secondary text-center">
			<p>Difficulty: {{ difficulties.find(d => d.value === difficulty)?.label }}</p>
			<p v-if="winner" class="mt-2">
				<button
					@click="resetGame"
					class="text-light-accent dark:text-dark-accent font-bold hover:underline"
				>
					Play Again?
				</button>
			</p>
		</div>
	</article>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

type Player = 'X' | 'O' | ''
type Difficulty = 'easy' | 'medium' | 'hard'

const board = ref<Player[]>(Array(9).fill(''))
const currentPlayer = ref<Player>('X')
const gameStarted = ref(false)
const difficulty = ref<Difficulty>('medium')
const winner = ref<Player | 'draw' | null>(null)

const difficulties = [
	{ label: 'Easy', value: 'easy' as Difficulty },
	{ label: 'Medium', value: 'medium' as Difficulty },
	{ label: 'Hard', value: 'hard' as Difficulty }
]

const startGame = (diff: Difficulty) => {
	difficulty.value = diff
	gameStarted.value = true
	board.value = Array(9).fill('')
	currentPlayer.value = 'X'
	winner.value = null
}

const resetGame = () => {
	gameStarted.value = false
	board.value = Array(9).fill('')
	currentPlayer.value = 'X'
	winner.value = null
}

const makeMove = (index: number) => {
	if (board.value[index] !== '' || winner.value || currentPlayer.value !== 'X') {
		return
	}
	
	board.value[index] = 'X'
	currentPlayer.value = 'O'
	
	// Check for winner
	if (checkWinner(board.value)) {
		winner.value = 'X'
		return
	}
	
	// Check for draw
	if (board.value.every(cell => cell !== '')) {
		winner.value = 'draw'
		return
	}
	
	// AI move after a short delay
	setTimeout(() => {
		if (!winner.value) {
			aiMove()
		}
	}, 300)
}

const aiMove = () => {
	if (winner.value) return
	
	let move: number
	
	if (difficulty.value === 'easy') {
		// Easy: Random move
		const availableMoves = board.value.map((cell, index) => cell === '' ? index : -1).filter(i => i !== -1)
		move = availableMoves[Math.floor(Math.random() * availableMoves.length)]
	} else if (difficulty.value === 'medium') {
		// Medium: 70% chance of best move, 30% random
		if (Math.random() < 0.7) {
			move = getBestMove(board.value)
		} else {
			const availableMoves = board.value.map((cell, index) => cell === '' ? index : -1).filter(i => i !== -1)
			move = availableMoves[Math.floor(Math.random() * availableMoves.length)]
		}
	} else {
		// Hard: Always best move (minimax)
		move = getBestMove(board.value)
	}
	
	if (move !== undefined && move !== -1) {
		board.value[move] = 'O'
		currentPlayer.value = 'X'
		
		// Check for winner
		if (checkWinner(board.value)) {
			winner.value = 'O'
			return
		}
		
		// Check for draw
		if (board.value.every(cell => cell !== '')) {
			winner.value = 'draw'
		}
	}
}

const checkWinner = (board: Player[]): boolean => {
	const winPatterns = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	]
	
	return winPatterns.some(pattern => {
		const [a, b, c] = pattern
		return board[a] !== '' && board[a] === board[b] && board[b] === board[c]
	})
}

const getBestMove = (board: Player[]): number => {
	// Minimax algorithm
	const minimax = (board: Player[], depth: number, isMaximizing: boolean): number => {
		if (checkWinner(board)) {
			return isMaximizing ? -10 + depth : 10 - depth
		}
		
		if (board.every(cell => cell !== '')) {
			return 0
		}
		
		if (isMaximizing) {
			let bestScore = -Infinity
			for (let i = 0; i < 9; i++) {
				if (board[i] === '') {
					board[i] = 'O'
					const score = minimax(board, depth + 1, false)
					board[i] = ''
					bestScore = Math.max(score, bestScore)
				}
			}
			return bestScore
		} else {
			let bestScore = Infinity
			for (let i = 0; i < 9; i++) {
				if (board[i] === '') {
					board[i] = 'X'
					const score = minimax(board, depth + 1, true)
					board[i] = ''
					bestScore = Math.min(score, bestScore)
				}
			}
			return bestScore
		}
	}
	
	let bestMove = -1
	let bestScore = -Infinity
	
	for (let i = 0; i < 9; i++) {
		if (board[i] === '') {
			board[i] = 'O'
			const score = minimax(board, 0, false)
			board[i] = ''
			if (score > bestScore) {
				bestScore = score
				bestMove = i
			}
		}
	}
	
	return bestMove
}
</script>

<style scoped>
.game-card-attention {
	animation: attentionPulse 2s ease-in-out infinite;
}

@keyframes attentionPulse {
	0%, 100% {
		box-shadow: 4px 4px 0px 0px #000000;
		border-color: #000000;
	}
	50% {
		box-shadow: 8px 8px 0px 0px #00ff88, 0 0 30px rgba(0, 255, 136, 0.3);
		border-color: #00ff88;
	}
}

.dark .game-card-attention {
	animation: attentionPulseDark 2s ease-in-out infinite;
}

@keyframes attentionPulseDark {
	0%, 100% {
		box-shadow: 4px 4px 0px 0px #00ff88;
		border-color: #00ff88;
	}
	50% {
		box-shadow: 8px 8px 0px 0px #00ff88, 0 0 30px rgba(0, 255, 136, 0.5);
		border-color: #00ff88;
		transform: scale(1.02);
	}
}

.game-card-attention:hover {
	animation: none;
}
</style>
