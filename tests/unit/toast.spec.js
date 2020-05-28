import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Toast from '../../src/toast'

chai.use(sinonChai)

describe('Toast.vue', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })
})