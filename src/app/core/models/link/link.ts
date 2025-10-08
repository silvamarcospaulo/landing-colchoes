export class Link {
    constructor(
        public label: string,
        public url: string,
        public icon?: string
    ) {
        this.label = label;
        this.url = url;
        this.icon = icon;
    }
}