"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    triggerSearch: (destination: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [searchQuery, setSearchQuery] = useState("");

    const triggerSearch = (destination: string) => {
        setSearchQuery(destination);
        // Smooth scroll to results if on home page
        const element = document.getElementById("results-grid");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, triggerSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}
