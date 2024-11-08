// app/api/register/route.js
import { hash } from "bcryptjs"; // Or use any hashing library you prefer
import { prisma } from "../../../lib/prisma"; // Assuming you're using Prisma ORM for DB

export async function POST(req) {
  const { firstName, lastName, username, email, password } = await req.json();

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return new Response(
      JSON.stringify({ success: false, message: "User already exists." }),
      { status: 400 }
    );
  }

  // Hash the password
  const hashedPassword = await hash(password, 10);

  // Create a new user in the database
  try {
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      },
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal server error." }),
      { status: 500 }
    );
  }
}
