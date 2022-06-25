<script lang="ts">
	import Clock from '$components/app/tools/pomodoro/Clock.svelte';
	import Control from '$components/app/tools/pomodoro/Control.svelte';
	import { ClockState } from '$enums/pomodoro';
	import { runState } from '../../stores/pomodoro/stores';

	let clockState: ClockState = ClockState.MainState;
</script>

<svelte:head>
	<title>Pomodoro Timer</title>
</svelte:head>
<section id="pomodoro" class="grid grid-rows-6 h-screen justify-center">
	<h1 class="text-center text-heading1 font-bold text-xl h-fit self-center md:text-3xl">
		Pomodoro
	</h1>
	<div id="pomodoro-timer" class="flex flex-col md:flex-row">
		<div class="flex flex-col items-center">
			<Clock {clockState} runState={$runState} />
			<Control />
			<!-- <RunController
				onPause={onPause}
				onResume={onResume}
				onStart={onStart}
				onStop={onStop}
			/>
			<ClockSlider/> -->
		</div>
		<!-- <div class='flex flex-row md:flex-col md:mt-8 md:ml-3'>
			<SecondaryClock 
				minutes={state.clockState === ClockState.BreakState ? mainMinutes : breakMinutes } 
				seconds={state.clockState === ClockState.BreakState ? mainSeconds : breakSeconds } 
				onClick={() => {setState.setControlState(ControlState.BREAK_CLOCK)}}
			/>
			<CycleView 
				cycleCount={cycle} 
				onClick={() => {setState.setControlState(ControlState.CYCLE)}}
			/>
		</div> -->
	</div>
</section>
