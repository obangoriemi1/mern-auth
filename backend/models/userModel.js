import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
        
    },
    profilePicture: {
        type: String,
        default: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnwMBIgACEQEDEQH/xAAaAAEBAAMBAQAAAAAAAAAAAAAAAwECBAUH/8QAKhABAAIBAwQBAgYDAAAAAAAAAAECAxEhQQQSMVEyYXETFCIzgaFDU5H/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAA0tkiNoTm0z5kFZtEcsfiVSAV/Eq2i0TzCADoEItMcqVvE7cg3AAAAAAAAAASvfXx4ZyW4/6mAAAAAAAAClL8So51cdtY38g3AAAAAAYtOkasp5Z2iATAABPPfsxTPvYEs3UTEzXHP8ueZmfMzP3YAZi1q71mYl1YM/dPbfzxPtyAPSGuO3dStvcNgGYnSdWAHRHgaY51q3AAAAASy/JVHJ8gagAIdX+1H3XTz078UxHG4OEBUAAdvT/s1Va469uOsfRsigAN8XmVUsXmfsqAAAAAlljeFWmSNa6+gSAABrfJSnytv65BDN086zbHG3pzzEx5iYdU9VTiLSxPVUnzSQc1azadIiZl1YMHbPdfzx9GPzNOKSzHVUnzW0AuNaXreP0zEtgAAUxRtMqMVjSujIAAAAAAIXjtlha1e6EZjTyCHUZeyO2vyn+nI2vabXtaeZaqAAgADMTMTrWdJdmDL+JG8aW5cSmC3bkj67Siu5tjrrbX0xFZnZasaQDIAAAAAAADW9e6Jjn22AeTmw3wzpaNuJ9pvZmImNJjWHNl6Klt6T2T64B546bdHlj46W/lP8vm/1yokKx0+af8cqU6LJb5TFf7BzLdPgvktFo2rHMuzH0mOm8/qn6uhBisaMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)  
export default User