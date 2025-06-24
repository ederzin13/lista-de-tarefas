export class Task {
    title;
    content;
    date;
    time;

    constructor(title, content, date = null, time = null) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.time = time;
    }
}
