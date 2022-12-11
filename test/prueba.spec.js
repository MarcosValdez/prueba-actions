/* eslint-disable no-unused-vars */
import chai from 'chai'
import app from '../index.js'
// eslint-disable-next-line no-unused-vars
import request from 'supertest'
import { assert, describe, it } from 'vitest'
  
const expect = chai.expect
const url = 'http://localhost:8080' 
    
describe('Testing user enpoint: ', function() {

  it('Se deberia registrar un usuario: ',async () => {
    const res = await request(app).get('/prueba')
    expect(res.status).to.equal(200)
  }) 
     
  /* it('should return a user if valid id is passed', async ()=>{
      const user = new userSchema({
        firstName: 'John',
        lastName: 'Doe',
        email: 'hi@johndoe.com',
        password: '$0m3Rand0mPa55',
        dateOfBirth: '1976-06-25',
        country: 'Nepal'
      })
      let savedUser = await user.save();
      const res = await request(app).get('/api/v0/users/user/' + savedUser._id);

      expect(res.status).to.equal(200);
      expect(res.body.user).to.have.property('firstName', user.firstName);
    })*/
})