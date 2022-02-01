"use strict";

class BaseException extends Error {
    constructor (message = "", fileName, lineNumber){
        super(message, fileName, lineNumber);
        this.name = "BaseException";
        if (Error.captureStackTrace) {
        Error.captureStackTrace(this, BaseException)
        }
    }
}
   
//Excepción acceso inválido a constructor
class InvalidAccessConstructorException extends BaseException {
    constructor (fileName, lineNumber){
        super("Constructor can’t be called as a function.", fileName, lineNumber);
        this.name = "InvalidAccessConstructorException";
    }
}
   
//Excepción personalizada para indicar valores vacios.
class EmptyValueException extends BaseException {
    constructor (param, fileName, lineNumber){
        super("Error: The parameter " + param + " can't be empty.", fileName,lineNumber);
        this.param = param;
        this.name = "EmptyValueException";
    }
}

//Excepción personalizada para indicar valores null.
class NullValueException extends BaseException {
    constructor (param, fileName, lineNumber){
        super("Error: The parameter " + param + " is null.");
        this.param = param;
        this.name = "NullValueException";
    }
}
 
//Excepción personalizada para indicar valores que estan en la lista.
class InListException extends BaseException {
    constructor (param, fileName, lineNumber){
        super("Error: The parameter" + param + " is in list.");
        this.param = param;
        this.name = "InListException";
    }
}

//Excepción personalizada para indicar valores que estan en la lista.
class NotInListException extends BaseException {
    constructor (param, fileName, lineNumber){
        super("Error: The parameter" + param + " is not in list.");
        this.param = param;
        this.name = "NotInListException";
    }
}

//Excepción personalizada para indicar valores que estan en la lista.
class NegativeStockException extends BaseException {
    constructor (fileName, lineNumber){
        super("Error: The stock is negative");
        this.param = param;
        this.name = "NegativeStockException";
    }
}