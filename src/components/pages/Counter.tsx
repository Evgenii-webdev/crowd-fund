import React from 'react';
import { Link, LinkedComponent } from 'valuelink';
import * as api from '../api/ApiClient';

interface ICounterState {
    currentCount: number;
}

export class Counter extends LinkedComponent<{}, ICounterState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { currentCount: 0 };
    }

    private validateLessThan4(num: number): boolean {
        return num < 4;
    }

    render() {
        const state$ = this.state$();
        const $count = this.linkAt("currentCount");
        $count.check(this.validateLessThan4, "Ooops");

        return (
            <div>
                <h1>Counter</h1>
                <input {...$count.props} className={$count.error ? 'error' : ''} /><br />
                <span>{$count.error || ''}</span>

                <button className="btn btn-primary" onClick={() => $count.update(obj => obj + 1)}>Increment</button>
                <button className="btn btn-secondary" onClick={() => alert($count.value)}>Show Value</button>
            </div>
        );
    }
}
