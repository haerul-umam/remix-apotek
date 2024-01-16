import {
	type FetcherWithComponents,
	type SubmitFunction,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useTypedFetcher } from "remix-typedjson";

export default function useFetcherPromise<TData = unknown>() {
	const fetcher = useTypedFetcher<TData>();
	const deferredRef = useRef<Deferred<TData>>();

	const submit: FetcherWithPromisifiedSubmit<TData>["submit"] = (...args) => {
		deferredRef.current = new Deferred();
		fetcher.submit(...args);
		return deferredRef.current.promise;
	};

	useEffect(() => {
		if (fetcher.state === "idle") {
			deferredRef.current?.resolve(fetcher.data);
			deferredRef.current = undefined;
		}
	}, [fetcher.state, fetcher.data]);

	return { ...fetcher, submit };
}

type PromisifiedSubmitFunction<TData = unknown> = (
	...args: Parameters<SubmitFunction>
) => Promise<TData>;

type FetcherWithPromisifiedSubmit<TData = unknown> = Omit<
	FetcherWithComponents<TData>,
	"submit"
> & { submit: PromisifiedSubmitFunction<TData> };

class Deferred<T = unknown> {
	private _promise: Promise<T>;

	/**
	 * Resolves the promise with given value.
	 */
	public resolve!: (value: any) => void;

	/**
	 * Reject the promise with given reason.
	 */
	public reject!: (reason?: unknown) => void;

	/**
	 * Get the underlying promise that can be awaited.
	 */
	public get promise(): Promise<T> {
		return this._promise;
	}

	public constructor() {
		this._promise = new Promise<T>((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});
		Object.freeze(this);
	}
}
