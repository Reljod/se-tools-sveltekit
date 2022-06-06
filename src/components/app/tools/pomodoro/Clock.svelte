<script lang="ts">
	import { ClockInit } from '$configs/pomodoro';
	import { ClockState, RunState } from '$enums/pomodoro';
	import { convertTimeToTimerFormat } from '$lib/helpers/pomodoro';
	import { tweened } from 'svelte/motion';

	export let clockState: ClockState;
	export let runState: RunState;
	const TIMER_SPEED_MS = 1000;
	const initTime = ClockInit[clockState];

	let original: number = initTime.minutes * initTime.seconds;
	let timer = tweened(original);

	$: isRunning = runState === RunState.Running;

	setInterval(() => {
		if ($timer > 0 && isRunning) $timer--;
	}, TIMER_SPEED_MS);

	let clockStyle = 'text-white';
	$: minutes = Math.floor($timer / 60);
	$: seconds = Math.floor($timer - minutes * 60);

	$: if (runState === RunState.Stopped) {
		timer.set(original);
	}

	$: clockTime = convertTimeToTimerFormat(minutes, seconds);
</script>

<div
	id="clock"
	class={'col-auto text-9xl rounder-3xl sm:text-[200px] md:text-[250px] hover:bg-gray-800 ' +
		`${clockStyle}`}
>
	{clockTime}
</div>
