const did = require('.')

it('can require did document', () => {
    expect(did.id).toBe('did:web:or13.github.io:signor')
})