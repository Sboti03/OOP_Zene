let list = []


class Zene {
    constructor(title, lenghtInSec) {
        this.title = title;
        this.lenghtInSec = parseInt(lenghtInSec);
    }
    static calTotalLenght() {
        let totalLenght = 0;
        for(let i = 0; i<list.length;i++) {
            totalLenght += list[i].lenghtInSec
        }
        document.getElementById('totalLenght').value = "Összesített zene hossza: " + totalLenght
    }
}


function add() {
    let title = document.getElementById('musicTitle').value
    let lenght = document.getElementById('musicLenght').value
    let newMusic = new Zene(title,lenght)
    list.push(newMusic)
    Zene.calTotalLenght() 
}


function init() {
    document.getElementById('add').addEventListener('click', add)
}
document.addEventListener('DOMContentLoaded', init)