import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  academicTitle: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  institutionCountry: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 10
  },
  avatar: {
    type: String
  }
},
{
  timestamps: true
})

const User = model('user', UserSchema)
export default User
