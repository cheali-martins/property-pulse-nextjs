"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Signup() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (input.password !== input.confirmPassword) {
      toast.error("Password mismatch.");
      return;
    }

    try {
      // Send registration request to the API
      const response = await axios.post("/api/register", input);

      if (response.data.success) {
        toast.success("Account created successfully!");
        router.push("/auth/login"); // Redirect to the login page
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Error creating account.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {/* Form with onSubmit attached to submitHandler */}
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <Label>First Name</Label>
            <Input
              type="text"
              name="firstName"
              value={input.firstName}
              onChange={changeEventHandler}
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="lastName"
              value={input.lastName}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={changeEventHandler}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 text-white">
            Sign Up
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign in with</span>
          </div>
        </div>

        <Button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white hover:bg-red-600"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
