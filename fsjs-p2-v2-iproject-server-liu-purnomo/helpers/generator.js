const generator = require('generate-password');

const pinGenerator = () => {
    return generator.generate({
        length: 6,
        numbers: true
    });
}

const tokenKey = () => {
    return generator.generate({
        length: 4,
        lowercase: false
    });
}

const usernameGenerator = (email) => {
    let name;
    const numberUniq = generator.generate({
        length: 5,
        numbers: true
    })

    if (!email) name = numberUniq
    else name = email.split("@");

    let output = name[0] + numberUniq;

    return output
};

module.exports = {
    pinGenerator,
    usernameGenerator,
    tokenKey
}