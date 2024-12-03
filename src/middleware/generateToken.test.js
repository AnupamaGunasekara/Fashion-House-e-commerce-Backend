const jwt = require('jsonwebtoken');
const User = require('../users/user.model');
const generateToken = require('./generateToken');

jest.mock('jsonwebtoken');
jest.mock('../users/user.model');

describe('generateToken', () => {
    const mockUserId = 'mockUserId';
    const mockUser = {
        _id: mockUserId,
        role: 'admin',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should generate a token for a valid user', async () => {
        User.findById.mockResolvedValue(mockUser); // Mock successful user lookup
        jwt.sign.mockReturnValue('mockToken'); // Mock token generation

        const token = await generateToken(mockUserId);

        expect(User.findById).toHaveBeenCalledWith(mockUserId);
        expect(jwt.sign).toHaveBeenCalledWith(
            { userId: mockUser._id, role: mockUser.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );
        expect(token).toBe('mockToken');
    });
});
