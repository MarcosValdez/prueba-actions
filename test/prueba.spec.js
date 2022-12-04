import chai from 'chai'
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect
const url = "http://localhost:8080";

describe('Testing user enpoint: ', function() {
    describe('Verificaion de metodos CRUD', function(){
        it('Se deberia registrar un usuario: ', (done) => {
            chai.request(url)
            .get('/prueba')
            .end( (err,res) =>{
                console.log(res)
                expect(res).to.equal("hello world");
                done();
            });
        });
    })
})