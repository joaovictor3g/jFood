import crypto from 'crypto';

const id = crypto.randomBytes(4).toString('hex');

export default id;