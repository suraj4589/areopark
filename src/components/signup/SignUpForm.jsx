import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dateofbirth: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const validateForm = () => {
        let newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (!/^[a-zA-Z ]{2,30}$/.test(formData.name)) {
            newErrors.name = "Name should only contain letters and spaces.";
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
        ) {
            newErrors.email = "Invalid email address.";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (
            !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,16}/.test(formData.password)
        ) {
            newErrors.password =
                `Password must be at least 8  to 16 characters long\
               ! At least one number[0-9]\
               ! At least one uppercase letter [A-Z]\
               ! At least one lowercase letter[a-z]\
               ! At least one special symbol (e.g., @, #, $, %, etc.)...`;
        }

        // Confirm Password validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");

        if (validateForm()) {
            try {
                const response = await fetch("https://your-backend-url.com/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setSuccess("Signup successful!");
                    setFormData({
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    });
                    setErrors({});
                } else {
                    const errorData = await response.json();
                    setErrors({ server: errorData.message || "An error occurred." });
                }
            } catch (error) {
                setErrors({ server: "Failed to connect to the server." });
            }
        }
    };



    return (
        <div className="max-w-md mx-auto m-20 bg-white p-6 rounded-lg shadow-xl text-start">
            <div className="text-end text-2xl sm:mx-auto sm:w-full sm:max-w-sm ">
                <button title="close" onClick={() => navigate('/')}><FaX /></button>
                <h1 className="text-2xl font-bold mb-4 text-center">Signup Form</h1>
            </div>

            {success && (
                <p className="text-green-500 text-center mb-4">{success}</p>
            )}
            {errors.server && (
                <p className="text-red-500 text-center mb-4">{errors.server}</p>
            )}

            <form action="" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Name: *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`w-full  mt-1 px-4 py-2 border-2 border-solid rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"
                            }`}
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter username.."
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                        Email: *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full mt-1 px-4 py-2 border-2 border-solid rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Ex- sadf2566@gmail.com"

                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="dateofbirth" className="block  text-gray-700  ">
                        Date of Birth: *
                    </label>
                    <input
                        type="date"
                        id="dateofbirth"
                        name="dateofbirth"

                        onChange={(e) =>
                            setFormData({ ...formData, dateofbirth: e.target.value })
                        }
                        className="w-full  mt-1 px-4 py-2 border-2 border-solid rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">
                        Password: *
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={`w-full mt-1 px-4 py-2 border-2 border-solid rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? "border-red-500" : "border-gray-300"
                            }`}
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                        placeholder="Please Enter Password(Ex- Abc@12356)"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                {/* Confirm Password Field */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700">
                        Confirm Password: *
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className={`w-full mt-1 px-4 py-2 border-2 border-solid rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                            }`}
                        value={formData.confirmPassword}
                        onChange={(e) =>
                            setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                        placeholder="Please Re-Enter Confirm Password"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
