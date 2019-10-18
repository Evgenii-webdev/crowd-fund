import * as React from 'react';
import { Button, DatePicker } from 'antd';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { Date2Moment, Moment2Date } from '../utils/Date';

import '../assets/css/datacard.css';

export interface DateRange {
    from: Date;
    to: Date;
}

export interface IDateRangeBarProps {
    onRangeChanged: (range: DateRange) => void;
}

interface IDateRangeBarState {
    key: string;
    range: DateRange;
}

class DateRangeBar extends React.Component<IDateRangeBarProps, IDateRangeBarState> {
    constructor(props: Readonly<IDateRangeBarProps>) {
        super(props);

        this.state = {
            key: 'day',
            range: { from: new Date(), to: new Date() }
        }
    }

    setKey = (key: string) => {
        let from: Date = new Date();
        let to: Date = new Date();

        const year = from.getFullYear();
        const month = from.getMonth();
        const weekday = from.getDay();
        const date = from.getDate();

        switch (key) {
            case 'day':
                break;
            case 'week':
                from.setDate(date - weekday);
                to.setDate(date + 6 - weekday);
                break;
            case 'month':
                from.setDate(1);
                to = new Date(year, month + 1, 0);
                break;
            case 'year':
                from = new Date(year, 0, 1);
                to = new Date(year, 11, 31);
                break;
        }

        this.props.onRangeChanged({ from, to });
        this.setState({ range: { from, to } });
    }

    handleChange = (dates: RangePickerValue) => {
        const from = dates[0] ? new Date(Moment2Date(dates[0])) : new Date();
        const to = dates[1] ? new Date(Moment2Date(dates[1])) : new Date();

        this.props.onRangeChanged({ from, to });
        this.setState({ range: { from, to } });
    }

    render() {
        const { range } = this.state;

        return (

            <div className='date-rangebar'>
                <Button type='link' onClick={() => this.setKey('day')} className='range-link'>
                    All day
                </Button>
                <Button type='link' onClick={() => this.setKey('week')} className='range-link'>
                    All Week
                </Button>
                <Button type='link' onClick={() => this.setKey('month')} className='range-link'>
                    All Month
                </Button>
                <Button type='link' onClick={() => this.setKey('year')} className='range-link'>
                    All Year
                </Button>
                <DatePicker.RangePicker
                    style={{ width: '256px' }}
                    showTime={false}
                    placeholder={['YYYY-MM-DD', 'YYYY-MM-DD']}
                    format={'YYYY-MM-DD'}
                    value={[Date2Moment(range.from), Date2Moment(range.to)]}
                    defaultValue={[Date2Moment(range.from), Date2Moment(range.to)]}
                    defaultPickerValue={[Date2Moment(range.from), Date2Moment(range.to)]}
                    onCalendarChange={(dates, str) => this.handleChange(dates)} />
            </div>
        )
    }
}

export default DateRangeBar;