var assert = require('assert');
var Validator = require('../ejercicio-01');

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
describe('creditCardNumber', function() {
    it('return error if no number is entered', function() {
        assert.equal(Validator.isValidCard(), "Ingresa un numero");
    });

    it('return error if invalid data is entered', function() {
        assert.equal(Validator.isValidCard("hola"), "Error de dato");
        assert.equal(Validator.isValidCard(false), "Error de dato");
        assert.equal(Validator.isValidCard([1,2,3]), "Error de dato");
    });

    it("it should return an error if we dont have 16 digits", function() {
        assert.equal(Validator.isValidCard(123), "Faltan numeros");
    });

    it("it should return true if valid credit card number is entered", function() {
        assert.equal(Validator.isValidCard(5390484296662060), true);
        assert.equal(Validator.isValidCard(5522105861876196), true);
        assert.equal(Validator.isValidCard(4539675588780859), true);

    });

    it("it should return false if invalid credit card number is entered", function() {
        assert.equal(Validator.isValidCard(4929392012041992), false);
        assert.equal(Validator.isValidCard(4314196554838449), false);
        assert.equal(Validator.isValidCard(4532224583025748), false);
    });

});
