"use client"

import ProtectedRoute from "../components/ProtectedRoute"

export default function UserDashboard(){
    return(
        <ProtectedRoute role="user">
            <h1>User Dashboard</h1>
            <p>Only regular users can see this page .</p>
        </ProtectedRoute>

    )
}