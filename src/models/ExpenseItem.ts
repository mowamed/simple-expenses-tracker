export class IExpenseItem {
    constructor(
        public id: number,
        public title: string,
        public amount: number,
        public date: Date
    ) {
    }
}
