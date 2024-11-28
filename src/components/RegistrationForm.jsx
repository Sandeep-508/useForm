import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormWithTable = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [tableData, setTableData] = useState([]);

    const onSubmit = (data) => {
        setTableData((prevData) => [...prevData, data]);
        console.log("Form Data", data)
        reset();
    };

    return (
        <div className="flex items-center justify-center min-h-screen flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="flex bg-[#FEFEFE] shadow-box max-w-[700px] mx-auto p-5 rounded-md items-center gap-4 justify-center flex-col w-full">
                <h2 className="mb-8 text-4xl font-bold font-Poppins">Form Validation</h2>
                <div className="flex items-center justify-between gap-2 max-w-[500px] w-full">
                    <label className="sm:text-xl text-sm font-medium font-leagueSpartan">First Name:</label>
                    <div className="flex items-start flex-col">
                        <input className="p-3 border border-[#D2D6DB] rounded-md w-full font-leagueSpartan font-normal"
                            type="text"
                            {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && <p className="text-red-700 text-xs font-leagueSpartan">{errors.firstName.message}</p>}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 max-w-[500px] w-full">
                    <label className="sm:text-xl text-sm font-medium font-leagueSpartan">Last Name:</label>
                    <div className="flex items-start flex-col">
                        <input className="p-3 border border-[#D2D6DB] rounded-md w-full font-leagueSpartan font-normal"
                            type="text"
                            {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <p className="text-red-700 text-xs font-leagueSpartan">{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 max-w-[500px] w-full">
                    <label className="sm:text-xl text-sm font-medium font-leagueSpartan">Password:</label>
                    <div className="flex items-start flex-col">
                        <input className="p-3 border border-[#D2D6DB] rounded-md w-full font-leagueSpartan font-normal"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            })}
                        />
                        {errors.password && <p className="text-red-700 text-xs font-leagueSpartan">{errors.password.message}</p>}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 max-w-[500px] w-full">
                    <label className="sm:text-xl text-sm font-medium font-leagueSpartan">Confirm Password:</label>
                    <div className="flex items-start flex-col">
                        <input className="p-3 border border-[#D2D6DB] rounded-md w-full font-leagueSpartan font-normal"
                            type="password"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && <p className="text-red-700 text-xs font-leagueSpartan">{errors.confirmPassword.message}</p>}
                    </div>
                </div>
                <button type="submit" className="border border-slate-400 text-white bg-[#5E0612] py-2 px-6 mt-5 rounded-lg text-lg font-Poppins">Submit</button>
            </form>
            <table border="1" className="mx-auto mt-10 border border-slate-800 border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 border-[#D2D6DB] py-2 font-leagueSpartan font-normal">First Name</th>
                        <th className="border px-4 border-[#D2D6DB] py-2 font-leagueSpartan font-normal">Last Name</th>
                        <th className="border px-4 border-[#D2D6DB] py-2 font-leagueSpartan font-normal">Password</th>
                        <th className="border px-4 border-[#D2D6DB] py-2 font-leagueSpartan font-normal">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td className="text-lg border border-[#D2D6DB] font-semibold py-2 font-leagueSpartan">{row.firstName}</td>
                            <td className="text-lg border border-[#D2D6DB] font-semibold py-2 font-leagueSpartan">{row.lastName}</td>
                            <td className="text-lg border border-[#D2D6DB] font-semibold py-2 font-leagueSpartan">{row.password}</td>
                            <td className="text-lg border border-[#D2D6DB] font-semibold py-2 font-leagueSpartan">
                                <button className="py-1 px-2 bg-green-300 rounded-lg mr-1 font-leagueSpartan">Edit</button>
                                <button className="py-1 px-2 bg-green-300 rounded-lg font-leagueSpartan">Done</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormWithTable;