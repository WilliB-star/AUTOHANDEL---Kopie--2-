import React from 'react';
import VerkaufenForm from './VerkaufenForm';

const VerkaufenPage = () => {
    return (
        <div style={{ padding: '40px', backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <h1 style={{ color: '#000000', marginBottom: '20px' }}>Verkaufen Page</h1>
            <VerkaufenForm />
        </div>
    );
};

export default VerkaufenPage;
