import Button from './button'

describe('<Button />', () => {
    test('snapshot', () => {
        expect(<Button>Click mee</Button>).toMatchSnapshot()
    })
})
