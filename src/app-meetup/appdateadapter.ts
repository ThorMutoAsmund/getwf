import { NativeDateAdapter } from "@angular/material";

export class AppDateAdapter extends NativeDateAdapter {

    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            const day = date.getDate();
            const month = (date.getMonth() + 1).toString().padStart(2,'0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        } else {
            return date.toDateString();
        }
    }

    parse(value: any) : Date {
        let parts = value.split('-');
        let day = 0+parts[0];
        let month = parts[1]-1;
        let year = 0+parts[2];
        let date = new Date(year,month,day);
        return day == date.getDate() && 
            month == date.getMonth() &&
            year == date.getFullYear() ? date : null;
    }
}

export const APP_DATE_FORMATS =
{
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};