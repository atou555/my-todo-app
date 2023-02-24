import bcrypt from 'bcryptjs';
import { generateToken, verifyToken } from '../utils/generateToken.js';
import User from '../models/user.js';

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(user._id);

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function register(req, res) {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();
    const token = generateToken(user._id);

    return res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function authenticate(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyToken(token);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

export default { login, register, authenticate };
