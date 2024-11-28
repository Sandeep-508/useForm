import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        reset();
    };

    const password = watch("password");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-4 justify-center flex-col w-full">
            <div className="flex items-center justify-between gap-6 max-w-[500px] w-full">
                <label className="text-xl font-bold">First Name:</label>
                <div className="flex items-start flex-col">
                    <input className="p-3 border border-slate-600 rounded-md"
                        type="text"
                        {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && <p className="text-red-700 text-xs">{errors.firstName.message}</p>}
                </div>
            </div>

            <div className="flex items-center justify-between gap-6 max-w-[500px] w-full">
                <label className="text-xl font-bold">Last Name:</label>
                <div className="flex items-start flex-col">
                    <input className="p-3 border border-slate-600 rounded-md"
                        type="text"
                        {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && <p className="text-red-700 text-xs">{errors.lastName.message}</p>}
                </div>
            </div>

            <div className="flex items-center justify-between gap-6 max-w-[500px] w-full">
                <label className="text-xl font-bold">Password:</label>
                <div className="flex items-start flex-col">
                    <input className="p-3 border border-slate-600 rounded-md"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long",
                            },
                        })}
                    />
                    {errors.password && <p className="text-red-700 text-xs">{errors.password.message}</p>}
                </div>
            </div>

            <div className="flex items-center justify-between gap-6 max-w-[500px] w-full">
                <label className="text-xl font-bold">Confirm Password:</label>
                <div className="flex items-start flex-col">
                    <input className="p-3 border border-slate-600 rounded-md"
                        type="password"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && <p className="text-red-700 text-xs">{errors.confirmPassword.message}</p>}
                </div>
            </div>

            <button type="submit" className="border border-slate-400 bg-green-600 p-2 rounded-lg text-lg">Submit</button>
        </form>
    );
};

export default RegistrationForm;
