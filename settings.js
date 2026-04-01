require('dotenv').config();
module.exports = {
    botName:            'Cypher_XD',
    botOwner:           'scotty',
    ownerNumber:        process.env.OWNER_NUMBER || '263788114185',
    prefix:             '.',
    packname:           'Cypher_XD',
    author:             '© scotty',
    version:            '1.0.0',
    commandMode:        'public',
    storeWriteInterval: 10000,
    warnLimit:          3,
};
