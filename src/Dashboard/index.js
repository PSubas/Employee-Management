import swal from "sweetalert";
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

    const handleEdit = () => {
        //
    };
    const handleDelete = () => {
        //
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
