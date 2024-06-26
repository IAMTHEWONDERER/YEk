import React from 'react';

export function Card({ className = "", children }) {
    return <div className={`bg-white dark:bg-gray-800 shadow rounded-lg ${className}`}>{children}</div>;
}

export function CardHeader({ className = "", children }) {
    return <div className={`p-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }) {
    return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function CardDescription({ className = "", children }) {
    return <p className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}>{children}</p>;
}

export function CardContent({ className = "", children }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}
