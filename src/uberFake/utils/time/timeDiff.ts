export const calculateTimeTake=(startTime: string, endTime: string): string =>{
    const start: Date = new Date(`1970-01-01T${startTime}:00Z`);
    const end: Date = new Date(`1970-01-01T${endTime}:00Z`);

    const timeDifferenceInMilliseconds: number = end.getTime() - start.getTime();
    const timeDifferenceInMinutes: number = timeDifferenceInMilliseconds / (1000 * 60);

    return `${timeDifferenceInMinutes}`;
}