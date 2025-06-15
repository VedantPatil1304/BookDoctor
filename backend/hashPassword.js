import bcrypt from 'bcryptjs';

async function hashPassword() {
  const password = 'doctor123';  // change to whatever password you want to hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log('Hashed Password:', hashedPassword);
}

hashPassword();
