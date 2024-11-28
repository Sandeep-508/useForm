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
    const [editIndex, setEditIndex] = useState(null);

    const onSubmit = (data) => {
        if (editIndex !== null) {
            const updatedData = [...tableData];
            updatedData[editIndex] = data;
            setTableData(updatedData);
            setEditIndex(null);
        } else {
            setTableData((prevData) => [...prevData, data]);
        }
        reset();
    };

    const handleEdit = (index) => {
        const rowData = tableData[index];
        setValue('firstName', rowData.firstName);
        setValue('lastName', rowData.lastName);
        setValue('password', rowData.password);
        setValue('confirmPassword', rowData.confirmPassword);
        setEditIndex(index);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-4 justify-center flex-col w-full">
                <div className="flex items-center justify-between gap-6 max-w-[500px] w-full">
                    <label className="text-xl font-bold">First Name:</label>
                    <div className="flex items-start flex-col">
                        <input className="p-3 border border-slate-600 rounded-md w-full"
                            type="text"
                            {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && <p className="text-red-700 text-xs">{errors.firstName.message}</p>}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-6 max-w-[500px] w-full">
                    <label className="text-xl font-bold">Last Name:</label>
                    <div className="flex items-start flex-col">
                        <input className="p-3 border border-slate-600 rounded-md w-full"
                            type="text"
                            {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <p className="text-red-700 text-xs">{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-6 max-w-[500px] w-full">
                    <label className="text-xl font-bold">Password:</label>
                    <div className="flex items-start flex-col">
                        <input className="p-3 border border-slate-600 rounded-md w-full"
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
                        <input className="p-3 border border-slate-600 rounded-md w-full"
                            type="password"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && <p className="text-red-700 text-xs">{errors.confirmPassword.message}</p>}
                    </div>
                </div>
                <button type="submit" className="border border-slate-400 bg-green-600 p-2 rounded-lg text-lg">{editIndex !== null ? "Update" : "Submit"}</button>
            </form>
            <table border="1" className="mx-auto mt-10 border border-slate-800 border-collapse px-4">
                <thead>
                    <tr>
                        <th className="border px-4 border-slate-950 py-2">First Name</th>
                        <th className="border px-4 border-slate-950 py-2">Last Name</th>
                        <th className="border px-4 border-slate-950 py-2">Password</th>
                        <th className="border px-4 border-slate-950 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td className="text-lg border border-slate-900 font-semibold py-2">{row.firstName}</td>
                            <td className="text-lg border border-slate-900 font-semibold py-2">{row.lastName}</td>
                            <td className="text-lg border border-slate-900 font-semibold py-2">{row.password}</td>
                            <td className="text-lg border border-slate-900 font-semibold py-2">
                                <button className="py-1 px-2 bg-green-300 rounded-lg" onClick={() => handleEdit(index)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormWithTable;
