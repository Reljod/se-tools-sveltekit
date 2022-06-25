import { RunState } from '$enums/pomodoro';
import { writable } from 'svelte/store';

export const runState = writable(RunState.Stopped);
