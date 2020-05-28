import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Input from '../../src/input'
chai.use(sinonChai)

describe('Input.vue', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
})