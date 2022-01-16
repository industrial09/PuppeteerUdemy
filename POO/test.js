class Person{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }   
    
    showInfo(){
        return "Person name is: "+ this._nombre+ " and its age is: "+ this._edad;
    }    
}

class child extends Person{
    constructor(nombre, edad, favoriteGame){
        super(nombre, edad);
        this._game = favoriteGame;
    }

    set setName(name){
        this._nombre = name;
    }
    
    get getName(){
        return this._nombre;
    }
    
    showChildInfo(){
        return "Child name is: "+ this._nombre+ " and its age is: "+ this._edad+
                " and its favorite game is: "+this._game;
    }

    anotherMethod(){
        let number = '6';
        var name = 'fjdkfl';
        const anything = "jsakdjalda";
    }   
}

let childInstance = new child('Juan', 10, 'Squidgame');
childInstance.setName = 'Leonardo';
console.log(childInstance.showChildInfo());