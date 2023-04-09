import React from 'react';
import { useParams } from 'react-router-dom';

const SearchResult = () => {
    const params = useParams()
    return (
        <div>
            <p>Search results {params.queryText}</p>
        </div>
    );
};

export default SearchResult;