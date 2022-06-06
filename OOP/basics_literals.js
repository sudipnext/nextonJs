// const s1 = "Sudip Parajuli";
// console.log(s1);
// console.log(s1.toUpperCase())
// window.alert(1)

const book1 = {
    title: "Book Name Dummy",
    author : "Sudip Parajuli",
    year: '2001',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book1.getSummary)