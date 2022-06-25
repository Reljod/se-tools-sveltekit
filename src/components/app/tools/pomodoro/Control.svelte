<script lang="ts">
	import { RunState } from '$enums/pomodoro';
	import { runState } from '../../../../stores/pomodoro/stores';
	import StartBtn from './ControlButtons/StartBtn.svelte';
	import StopBtn from './ControlButtons/StopBtn.svelte';
</script>

<section id="clock-controller" class="w-3/5 px-5">
	{#if $runState === RunState.Stopped}
		<StartBtn id="start" onClick={() => runState.set(RunState.Running)}>Start</StartBtn>
	{:else if $runState === RunState.Running}
		<div id="clock-stopper" class="flex flex-row">
			<StartBtn id="resume" onClick={() => runState.set(RunState.Running)}>Resume</StartBtn>
			<StopBtn id="stop" onClick={() => runState.set(RunState.Stopped)}>Stop</StopBtn>
		</div>
	{:else if $runState === RunState.Paused}
		<StopBtn id="pause" onClick={() => runState.set(RunState.Paused)}>Pause</StopBtn>
	{/if}
</section>
