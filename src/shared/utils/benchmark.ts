interface Benchmark<T> {
	readonly parameters?: () => T;
	readonly functions: Readonly<Record<string, (_profiler: BenchmarkProfiler, _parameters: T) => void>>;
}

export interface BenchmarkProfiler {
	readonly Begin: (_name: string) => void;
	readonly End: () => void;
}

const noop = () => undefined as never;

/**
 * Create a benchmarker for the Benchmarker plugin by boatbomber.
 */
export function benchmark<T>({ parameters = noop, functions }: Benchmark<T>): unknown {
	return {
		ParameterGenerator: parameters,
		Functions: functions,
	};
}
