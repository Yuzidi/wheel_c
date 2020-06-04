import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import TabsItem from '../../src/tabs/tabs-item'
chai.use(sinonChai)

describe('TabsItem.vue', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
})