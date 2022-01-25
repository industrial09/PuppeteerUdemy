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
        let number1 = 6;
        let number2 = 5;

        if(a > b){

        }

        var name = 'fjdkfl';
        const anything = "jsakdjalda";
        var array = ["Christian", 24, 60.6, true];
        array.concat(["Lupe", 34, 78.6]);
        //Just like any language, Arrays allow repeated values
        var arr = new Array();
        arr[0] = "Lupita";
        arr[1] = 35;
        arr.length();
        arr.shift();
        arr.size();
        arr.push("Diana");
        arr.sort();
        arr.delete("");
        //Map
        var map = new Map();
        map.set("Nombre", "Chiristian");
        map.set("Edad", 28);
        map.delete("Edad");
        map.get("Nombre");
        map.size();
        //Set: Just like in Java this is for having unique values
        var set = new Set();
        set.add("Arnulfo");
        set.add(24);
        set.add(38.5);
        set.delete(24);
    }  
}

let childInstance = new child('Juan', 10, 'Squidgame');
childInstance.setName = 'Leonardo';
console.log(childInstance.showChildInfo());