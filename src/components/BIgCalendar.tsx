"use client"

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

export default function BigCalendar() {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    };

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "98%" }}
            views={["work_week", "day"]}
            view={view}
            onView={handleOnChangeView}
            min={new Date(2025, 2, 0, 8, 0, 0)}
            max={new Date(2025, 2, 0, 17, 0, 0)}
        />
    );
} 