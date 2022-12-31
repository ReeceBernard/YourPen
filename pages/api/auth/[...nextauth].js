import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
    database: process.env.DB_URL,
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),],

    session: {
        jwt: true,
    },
    jwt: {
        secret: 'wfvrwfnwnlenvrjpigbnorfmpedwo2ir3bpgtnojfrpkdoe['
    },
})