import Swal from "sweetalert2";
// import styles from "@/styles/Home.module.css";

import { useState } from "react";

import Header from "@/components/Header";
import List from "@/components/List";
import Edit from "@/components/Edit";
import Add from "@/components/Add";

import { employeesData } from "@/data";

function Dashboard() {
    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        //
        console.log("Edit id", id);
    };
    const handleDelete = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "No, cancel",
        }).then((result) => {
            if (result.value) {
                const [employee] = employees.filter(
                    (employee) => employee.id === id
                );

                Swal.fire({
                    icon: "success",
                    title: "Deleted!",
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(
                    employees.filter((employee) => employee.id !== id)
                );
            }
        });
    };

    return (
        <div className="container">
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header setIsAdding={setIsAdding} />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Adding */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Editing */}
            {isEditing && (
                <Edit
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                    selectedEmployee={selectedEmployee}
                />
            )}
        </div>
    );
}

export default Dashboard;
