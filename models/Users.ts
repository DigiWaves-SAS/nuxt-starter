import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // Use Firebase UID as the MongoDB _id
    name: { type: String, default: null },
    surname: { type: String, default: null },
    nickname: { type: String, default: null, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, default: 'user' },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);