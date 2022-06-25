enum AppState {
	ConfigState = 'ConfigState',
	RunningState = 'RunningState'
}

enum ClockState {
	MainState = 'MainState',
	BreakState = 'BreakState',
	EndState = 'EndState'
}

enum ControlState {
	MAIN_CLOCK = 'MAIN_CLOCK',
	BREAK_CLOCK = 'BREAK_CLOCK',
	CYCLE = 'CYCLE',
	NONE = 'NONE'
}

enum RunState {
	Running = 'Running',
	Paused = 'Paused',
	Stopped = 'Stopped'
}

export { AppState, ClockState, ControlState, RunState };
