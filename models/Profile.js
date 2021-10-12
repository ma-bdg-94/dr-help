import { Schema, model } from 'mongoose'

const ProfileSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    focusArea: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    education: [
      {
        degree: {
          type: String,
          required: true,
        },
        speciality: {
          type: String,
          required: true,
        },
        subSpeciality: {
          type: String,
        },
        dateBegin: {
          type: Date,
          required: true,
        },
        dateEnd: {
          type: Date,
        },
        currentlyStudying: {
          type: Boolean,
          default: false,
        },
        university: {
          type: String,
          required: true,
        },
        universityCountry: {
          type: String,
          required: true,
        },
        department: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: true,
        },
      },
    ],
    works: [
      {
        subject: {
          type: String,
          required: true,
        },
        position: {
          type: String,
          required: true,
        },
        institution: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        summary: {
          type: String,
          required: true,
        },
        dateBegin: {
          type: Date,
          required: true,
        },
        dateEnd: {
          type: Date,
        },
        currentlyWorking: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
)

const Profile = model('profile', ProfileSchema)
export default Profile
