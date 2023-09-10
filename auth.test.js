const isCredentialCorrect = require('./auth')

test('should be not null', ()=>{
    expect(isCredentialCorrect).toBeDefined();
});

test('credentials should be correct', ()=>{
    expect(isCredentialCorrect('kodego@test.com', '123456789')).toBe(true);
});